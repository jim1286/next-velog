import dayjs from "dayjs";

export const utcToLocalYYYYMMDD = (utc: string | Date) => {
  if (!utc) {
    return "N/A";
  }
  return dayjs(utc).format("YYYY-MM-DD HH:mm:ss");
};
