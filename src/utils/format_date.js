import dayjs from "dayjs";

export function formatMountDay(date) {
  return dayjs(date).format("MM月DD日");
}

export function getDiffDays(starDate, endDate) {
  return dayjs(endDate).diff(starDate, "day");
}