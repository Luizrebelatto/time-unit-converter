import { MeasureTimeEnum } from "./enum";

export function secondsConverter(typeTo: string, valueFrom: number) {
    const totalSecondsLeapYear = 366 * 24 * 60 * 60;
    const totalSecondsYear = 365 * 24 * 60 * 60;

    switch (typeTo) {
        case MeasureTimeEnum.MILISECOND:
            return valueFrom * 1000;
        case MeasureTimeEnum.NANOSECOND:
            return valueFrom * 1000000000;
        case MeasureTimeEnum.MICROSECOND:
            return valueFrom * 1000000;
        case MeasureTimeEnum.MINUTE:
            return valueFrom / 3600;
        case MeasureTimeEnum.DAY:
            return valueFrom / 86400;
        case MeasureTimeEnum.WEEK:
            return valueFrom / 604800;
        case MeasureTimeEnum.MONTH_30:
            return valueFrom / 2592000;
        case MeasureTimeEnum.MONTH_31:
            return valueFrom / 2678400;
        case MeasureTimeEnum.CALENDAR_YEAR_LEAP:
            return valueFrom / totalSecondsLeapYear;
        case MeasureTimeEnum.CALENDAR_YEAR:
            return valueFrom / totalSecondsYear;
        default:
            return valueFrom;
    }
}
