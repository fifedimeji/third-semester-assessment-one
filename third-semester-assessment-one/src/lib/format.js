/**
 * Presentational formatting helpers for the blog app.
 */

/**
 * Returns the Tailwind classes for a post status badge.
 *
 * @param {string} status - One of "PUBLISHED", "DRAFT", "ARCHIVED"
 * @returns {string}
 */
export function statusBadgeClasses(status) {
  switch (status) {
    case "PUBLISHED":
      return "status-badge status-badge-published";
    case "DRAFT":
      return "status-badge status-badge-draft";
    case "ARCHIVED":
      return "status-badge status-badge-archived";
    default:
      return "status-badge status-badge-archived";
  }
}

/**
 * Formats an ISO date string into a readable date.
 *
 * @param {string} dateString - ISO 8601 date string
 * @returns {string}
 */
export function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Formats an ISO date string into a readable date and time.
 *
 * @param {string} dateString - ISO 8601 date string
 * @returns {string}
 */
export function formatDateTime(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
