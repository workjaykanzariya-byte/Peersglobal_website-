const fs = require('fs');
const filePath = 'C:/Users/hardi/OneDrive/Desktop/unity-app/app/Http/Controllers/Api/V1/Leadership/AdminNominationController.php';
let content = fs.readFileSync(filePath, 'utf8');

const newMethod = `
    /**
     * F10. Manually send approval email & WhatsApp notification to candidate.
     */
    public function sendApprovalEmail(Request $request, string $id): JsonResponse
    {
        try {
            $result = $this->nominationService->sendManualApprovalEmail($id);

            return $this->success($result, 'Approval email and WhatsApp notifications dispatched successfully.');
        } catch (\\Throwable $e) {
            return $this->error($e->getMessage(), 400);
        }
    }
}
`;

if (!content.includes('sendApprovalEmail')) {
  content = content.replace(/\n\}\s*$/, newMethod);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('AdminNominationController.php updated successfully');
} else {
  console.log('AdminNominationController.php already contains sendApprovalEmail');
}
