# Peers Global — Automated Production Deployment (CI/CD)

This document provides complete instructions for the automated Continuous Integration and Continuous Deployment (CI/CD) pipeline for the **Peers Global Website** ([https://peersglobal.com](https://peersglobal.com/)).

---

## 1. How the Workflow Operates

```
Developer creates feature branch / works on develop
                   ↓
Pull Request reviewed and merged into 'main'
                   ↓
GitHub Actions triggers automatically (.github/workflows/deploy-production.yml)
                   ↓
[Stage 1: CI Check in GitHub Runner]
  - Installs npm dependencies
  - Runs full Next.js production build check
  (Fails immediately if there are syntax or build errors, protecting the live VPS)
                   ↓
[Stage 2: Deployment on Production Server via SSH]
  - Connects to VPS: 187.127.181.73 as user 'peersglobal'
  - Fetches and resets /home/peersglobal/apps/website to origin/main
  - Runs npm install & npm run build
  - Performs zero-downtime PM2 reload (peersglobal-website)
  - Validates local port 3000 health
                   ↓
[Stage 3: Public Health Check]
  - Validates https://peersglobal.com returns HTTP 200 OK
  - Validates key subpages (e.g. /circles) return HTTP 200 OK
                   ↓
GitHub Actions reports Deployment Success ✅
```

---

## 2. Triggering Branch & Methods

* **Automatic**: Every `git push` or merged Pull Request to the **`main`** branch.
* **Manual**: Go to **GitHub Repository &rarr; Actions &rarr; "Deploy Peers Global Website to Production" &rarr; Click "Run workflow"**.

---

## 3. Required GitHub Repository Secrets

Configure the following secrets in **GitHub &rarr; Settings &rarr; Secrets and variables &rarr; Actions &rarr; Repository secrets**:

| Secret Name | Exact Value | Description |
| :--- | :--- | :--- |
| `PROD_SSH_HOST` | `187.127.181.73` | Production Server IP |
| `PROD_SSH_PORT` | `22` | SSH Port |
| `PROD_SSH_USER` | `peersglobal` | SSH Deployment User |
| `PROD_SSH_KEY` | *(Contents of `peersglobal_deploy` private key)* | Private OpenSSH Key |
| `PROD_DEPLOY_PATH` | `/home/peersglobal/apps/website` | Application Directory on VPS |

> **Important**: The `PROD_SSH_KEY` must include the entire key text, starting from `-----BEGIN OPENSSH PRIVATE KEY-----` and ending with `-----END OPENSSH PRIVATE KEY-----`.

---

## 4. Production Server Architecture

* **Host**: AlmaLinux 9.8 (Kernel 5.14)
* **Application Path**: `/home/peersglobal/apps/website`
* **Process Manager**: PM2 (`peersglobal-website`)
* **Internal Port**: `127.0.0.1:3000` (firewalled externally)
* **Web Server**: Apache 2.4 reverse proxy configured via `/home/peersglobal/public_html/.htaccess`
* **SSL/TLS**: Virtualmin Let's Encrypt Wildcard SSL

---

## 5. Maintenance & Troubleshooting Cheatsheet

### Inspect Application Logs
```bash
ssh peersglobal@187.127.181.73
pm2 logs peersglobal-website
```

### Check PM2 Status
```bash
pm2 status
```

### Manual Server Restart
```bash
pm2 restart peersglobal-website
```

### Manual On-Server Deployment (Fallback)
If GitHub Actions is ever unavailable, deploy directly via SSH:
```bash
ssh peersglobal@187.127.181.73
cd /home/peersglobal/apps/website
git fetch origin main
git checkout main
git reset --hard origin/main
npm install --prefer-offline --no-audit
npm run build
pm2 reload peersglobal-website --update-env
pm2 save
```

---

## 6. Instant Rollback Procedure

If a deployed version has an unexpected issue:
1. Revert the commit on GitHub (`git revert HEAD && git push origin main`), which triggers GitHub Actions to deploy the previous known good commit.
2. Or on the server, reset to the previous working commit:
   ```bash
   cd /home/peersglobal/apps/website
   git checkout <PREVIOUS_COMMIT_HASH>
   npm run build
   pm2 restart peersglobal-website
   ```
3. To immediately display the maintenance page if required:
   ```bash
   cd /home/peersglobal/public_html
   cp .htaccess.backup .htaccess
   cp index.html.maintenance index.html
   pm2 stop peersglobal-website
   ```
