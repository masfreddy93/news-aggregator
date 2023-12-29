/**
 * Returns a date in string format as wanted MediaStack for API request
 */
export function formatDate(inputDate: string | Date): string {
  if (!inputDate) {
    return '';
  }

  const date: Date = new Date(inputDate);

  return (
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  );
}
