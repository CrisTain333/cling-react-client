function getRelativeDateString(timestamp) {
  const timeDifference = Date.now() - new Date(timestamp).getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days == 1) {
    return "Yesterday";
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (days == 0 && hours > 12) {
    return "Today";
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (seconds > 0) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else {
    return "Just Now";
  }
}

export default getRelativeDateString;
