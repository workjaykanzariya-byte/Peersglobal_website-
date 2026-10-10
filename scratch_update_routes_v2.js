const fs = require('fs');
const filePath = 'C:/Users/hardi/OneDrive/Desktop/unity-app/routes/leadership.php';
let content = fs.readFileSync(filePath, 'utf8');

const target = "    Route::post('nominations/{id}/shortlist', [AdminNominationController::class, 'shortlist'])->whereUuid('id');";
const replacement = `    Route::post('nominations/{id}/shortlist', [AdminNominationController::class, 'shortlist'])->whereUuid('id');
    Route::post('nominations/{id}/send-approval-email', [AdminNominationController::class, 'sendApprovalEmail'])->whereUuid('id');
    Route::post('nominations/{id}/send-mail', [AdminNominationController::class, 'sendApprovalEmail'])->whereUuid('id');`;

if (!content.includes('send-approval-email')) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('routes/leadership.php updated with send-approval-email route');
} else {
  console.log('routes/leadership.php already has send-approval-email route');
}
