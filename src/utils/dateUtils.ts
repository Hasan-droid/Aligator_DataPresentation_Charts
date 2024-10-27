/**
 * Format a timestamp (e.g. 1616598000000) to a date string (e.g. "March 24, 2021, 3:00 PM")
 */
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};
