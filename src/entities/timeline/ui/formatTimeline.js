export const addLeadingZeros = (value) => ("00" + value).slice(-2);

export const formatTime = (date) => {
  const dateObj = new Date(date);
  return [dateObj.getHours(), dateObj.getMinutes()]
    .map((value) => addLeadingZeros(value))
    .join(":");
};

export const formatOffset = (offset) => {
  const totalSeconds = Math.floor(offset / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return hours > 0 ? `+${hours} ч ${minutes} мин` : `+${minutes} мин`;
};
