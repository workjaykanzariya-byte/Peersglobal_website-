const fs = require('fs');
const filePath = 'C:/Users/hardi/OneDrive/Desktop/unity-app/app/Services/Leadership/AdminNominationService.php';
let content = fs.readFileSync(filePath, 'utf8');

const oldMethod = `    protected function sendNominationApprovedNotification(LeadershipNomination $nomination): void
    {
        $nomination->loadMissing(['campaign.role', 'scope']);
        $phone = $nomination->mobile;
        $candidateName = $nomination->full_name ?: 'Candidate';
        $campaignName = $nomination->campaign?->name ?? 'Leadership Campaign';
        $roleName = $nomination->campaign?->role?->name ?? 'Leadership Role';
        $appNumber = $nomination->application_number;

        // 1. Dispatch WhatsApp message
        if ($phone) {
            try {
                $payload = [
                    'name' => $candidateName,
                    'candidate_name' => $candidateName,
                    'campaign_name' => $campaignName,
                    'role_name' => $roleName,
                    'application_number' => $appNumber,
                    'status' => 'Approved',
                    'message' => "Congratulations {$candidateName}! Your nomination application ({$appNumber}) for {$roleName} in {$campaignName} has been officially APPROVED by the Election Governance Committee.",
                ];

                $this->whatsappService->send(
                    templateKey: 'nomination_approved',
                    phone: $phone,
                    payload: $payload,
                    userId: $nomination->user_id
                );
            } catch (\\Throwable $e) {
                Log::warning('WhatsApp nomination approval failed: ' . $e->getMessage());
            }
        }

        // 2. Dispatch Email
        if ($nomination->email) {
            try {
                Mail::send([], [], function ($message) use ($nomination, $candidateName, $campaignName, $roleName, $appNumber) {
                    $html = "
                    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;'>
                        <div style='text-align: center; margin-bottom: 24px;'>
                            <h2 style='color: #0f172a; margin-bottom: 4px;'>Nomination Application Approved</h2>
                            <p style='color: #64748b; font-size: 14px;'>Peers Global Leadership Selection 2026</p>
                        </div>
                        <p style='color: #334155; font-size: 15px;'>Dear <strong>{$candidateName}</strong>,</p>
                        <p style='color: #334155; font-size: 15px; line-height: 1.6;'>
                            We are pleased to inform you that your candidate nomination request for <strong>{$roleName}</strong> in <strong>{$campaignName}</strong> has been officially <strong>APPROVED</strong> by the Scrutiny and Election Governance Committee.
                        </p>
                        <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;'>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Application Number:</strong> {$appNumber}</p>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Role:</strong> {$roleName}</p>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Status:</strong> <span style='color: #16a34a; font-weight: bold;'>Approved</span></p>
                        </div>
                        <p style='color: #334155; font-size: 15px; line-height: 1.6;'>
                            Your profile has been advanced to the voter roster and jury assessment phase. You will receive further updates regarding voter interaction and ballot schedules.
                        </p>
                        <hr style='border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;' />
                        <p style='color: #94a3b8; font-size: 12px; text-align: center;'>
                            Peers Global Unity Platform &bull; Election Governance Committee
                        </p>
                    </div>";

                    $message->to($nomination->email)
                        ->subject("Your Nomination Request is Approved - Peers Global ({$appNumber})")
                        ->html($html);
                });
            } catch (\\Throwable $e) {
                Log::warning('Email nomination approval failed: ' . $e->getMessage());
            }
        }
    }`;

const newMethod = `    /**
     * Send approval notifications (WhatsApp & Email) with official voting link.
     */
    protected function sendNominationApprovedNotification(LeadershipNomination $nomination): void
    {
        $nomination->loadMissing(['campaign.role', 'scope']);
        $phone = $nomination->mobile;
        $candidateName = $nomination->full_name ?: 'Candidate';
        $campaignName = $nomination->campaign?->name ?? 'Leadership Campaign';
        $roleName = $nomination->campaign?->role?->name ?? 'Leadership Role';
        $appNumber = $nomination->application_number;
        $votingLink = "https://peersglobal.com/leadership/campaigns/{$nomination->campaign_id}/vote?candidate={$nomination->id}";

        // 1. Dispatch WhatsApp message
        if ($phone) {
            try {
                $payload = [
                    'name' => $candidateName,
                    'candidate_name' => $candidateName,
                    'campaign_name' => $campaignName,
                    'role_name' => $roleName,
                    'application_number' => $appNumber,
                    'status' => 'Approved',
                    'voting_link' => $votingLink,
                    'message' => "Congratulations {$candidateName}! Your nomination application ({$appNumber}) for {$roleName} in {$campaignName} has been officially APPROVED. Share your official voting link with peers to cast votes: {$votingLink}",
                ];

                $this->whatsappService->send(
                    templateKey: 'nomination_approved',
                    phone: $phone,
                    payload: $payload,
                    userId: $nomination->user_id
                );
            } catch (\\Throwable $e) {
                Log::warning('WhatsApp nomination approval failed: ' . $e->getMessage());
            }
        }

        // 2. Dispatch Email with Shareable Voting Link
        if ($nomination->email) {
            try {
                Mail::send([], [], function ($message) use ($nomination, $candidateName, $campaignName, $roleName, $appNumber, $votingLink) {
                    $html = "
                    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;'>
                        <div style='text-align: center; margin-bottom: 24px;'>
                            <h2 style='color: #0f172a; margin-bottom: 4px;'>Nomination Application Approved</h2>
                            <p style='color: #64748b; font-size: 14px;'>Peers Global Leadership Selection 2026</p>
                        </div>
                        <p style='color: #334155; font-size: 15px;'>Dear <strong>{$candidateName}</strong>,</p>
                        <p style='color: #334155; font-size: 15px; line-height: 1.6;'>
                            We are pleased to inform you that your candidate nomination request for <strong>{$roleName}</strong> in <strong>{$campaignName}</strong> has been officially <strong>APPROVED</strong> by the Scrutiny and Election Governance Committee.
                        </p>
                        <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;'>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Application Number:</strong> {$appNumber}</p>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Role:</strong> {$roleName}</p>
                            <p style='margin: 4px 0; color: #475569; font-size: 14px;'><strong>Status:</strong> <span style='color: #16a34a; font-weight: bold;'>Approved</span></p>
                        </div>
                        
                        <div style='background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px; margin: 20px 0; text-align: center;'>
                            <h3 style='margin: 0 0 8px 0; color: #1e40af; font-size: 16px;'>Your Official Shareable Voting Link</h3>
                            <p style='color: #475569; font-size: 13px; margin-bottom: 12px;'>Share this link with your network and fellow peers to receive votes:</p>
                            <a href='{$votingLink}' target='_blank' style='display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: bold; font-size: 14px;'>Cast / View Voting Booth</a>
                            <p style='margin-top: 10px; font-size: 12px; color: #64748b; word-break: break-all;'>{$votingLink}</p>
                        </div>

                        <p style='color: #334155; font-size: 15px; line-height: 1.6;'>
                            Your profile has been advanced to the voter roster and jury assessment phase. You will receive further updates regarding voter interaction and ballot schedules.
                        </p>
                        <hr style='border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;' />
                        <p style='color: #94a3b8; font-size: 12px; text-align: center;'>
                            Peers Global Unity Platform &bull; Election Governance Committee
                        </p>
                    </div>";

                    $message->to($nomination->email)
                        ->subject("Your Nomination Request is Approved - Peers Global ({$appNumber})")
                        ->html($html);
                });
            } catch (\\Throwable $e) {
                Log::warning('Email nomination approval failed: ' . $e->getMessage());
            }
        }
    }

    /**
     * Manually trigger sending approval email and WhatsApp notification to candidate.
     *
     * @return array{nomination_id: string, application_number: string, candidate_name: string, email: string|null, mobile: string|null, voting_link: string, sent_at: string}
     */
    public function sendManualApprovalEmail(string $nominationId): array
    {
        /** @var LeadershipNomination $nomination */
        $nomination = LeadershipNomination::with(['campaign.role', 'scope'])->findOrFail($nominationId);

        $this->sendNominationApprovedNotification($nomination);

        $votingLink = "https://peersglobal.com/leadership/campaigns/{$nomination->campaign_id}/vote?candidate={$nomination->id}";

        $this->auditService->log(
            action: 'nomination.manual_email_sent',
            entityType: 'LeadershipNomination',
            entityId: $nomination->id,
            campaignId: $nomination->campaign_id,
            remarks: "Approval email and notifications manually dispatched to {$nomination->email}"
        );

        return [
            'nomination_id' => $nomination->id,
            'application_number' => $nomination->application_number,
            'candidate_name' => $nomination->full_name,
            'email' => $nomination->email,
            'mobile' => $nomination->mobile,
            'voting_link' => $votingLink,
            'sent_at' => Carbon::now()->toIso8601String(),
        ];
    }`;

content = content.replace(oldMethod, newMethod);
fs.writeFileSync(filePath, content, 'utf8');
console.log('AdminNominationService.php updated with voting link & manual email');
