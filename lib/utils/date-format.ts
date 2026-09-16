export function formatEventDateTime(startIso: string, endIso?: string | null) {
  if (!startIso) {
    return { dateStr: 'Date TBA', timeRangeStr: 'Time TBA' };
  }

  try {
    const startDate = new Date(startIso);
    
    // Format Date: e.g. "9 August 2026"
    const dateStr = startDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // Format Time: e.g. "10:00 AM"
    const startTimeStr = startDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    let timeRangeStr = startTimeStr;

    if (endIso) {
      const endDate = new Date(endIso);
      const endTimeStr = endDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      timeRangeStr = `${startTimeStr} - ${endTimeStr} IST`;
    } else {
      timeRangeStr = `${startTimeStr} IST`;
    }

    return { dateStr, timeRangeStr };
  } catch (err) {
    return { dateStr: startIso, timeRangeStr: '' };
  }
}
