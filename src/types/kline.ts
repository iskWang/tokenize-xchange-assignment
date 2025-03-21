export enum KLineInterval {
  OneMinute = "1m",
  FifteenMinutes = "15m",
  OneHour = "1h",
  OneDay = "1d"
}

export const KLineIntervalArray = [
  KLineInterval.OneMinute,
  KLineInterval.FifteenMinutes,
  KLineInterval.OneHour,
  KLineInterval.OneDay
] as const;
