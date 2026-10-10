const fs = require('fs');
const filePath = 'C:/Users/hardi/OneDrive/Desktop/unity-app/app/Models/Leadership/LeadershipNomination.php';
let content = fs.readFileSync(filePath, 'utf8');

const appendsCode = `
    protected $appends = [
        'candidate_name',
        'campaign_name',
        'applied_role_name',
        'voting_link',
    ];

    public function getCandidateNameAttribute(): ?string
    {
        return $this->full_name;
    }

    public function getCampaignNameAttribute(): ?string
    {
        return $this->campaign?->name;
    }

    public function getAppliedRoleNameAttribute(): ?string
    {
        return $this->campaign?->role?->name;
    }

    public function getVotingLinkAttribute(): string
    {
        return "https://peersglobal.com/leadership/campaigns/{$this->campaign_id}/vote?candidate={$this->id}";
    }
`;

if (!content.includes('candidate_name')) {
  content = content.replace(
    'protected static function booted(): void',
    appendsCode + '\n    protected static function booted(): void'
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('LeadershipNomination.php updated with appends');
} else {
  console.log('LeadershipNomination.php already has accessors');
}
