import dayjs from "dayjs";

export function formatMountDay(date, formatStr = "MM月DD日") {
	return dayjs(date).format(formatStr);
}

export function getDiffDays(starDate, endDate) {
	return dayjs(endDate).diff(starDate, "day");
}