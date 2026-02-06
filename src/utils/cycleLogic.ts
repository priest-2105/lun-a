import { addDays, format, differenceInDays } from 'date-fns';

export interface CycleData {
    lastPeriodStartDate: Date;
    cycleLength: number; // default 28
    periodLength: number; // default 5
}

export const estimateNextPeriod = (data: CycleData): Date => {
    return addDays(new Date(data.lastPeriodStartDate), data.cycleLength);
};

export const estimateFertileWindow = (data: CycleData): { start: Date; end: Date } => {
    const nextPeriod = estimateNextPeriod(data);
    // Ovulation is roughly 14 days before next period
    const ovulationDay = addDays(nextPeriod, -14);
    return {
        start: addDays(ovulationDay, -5), // Fertile window starts 5 days before ovulation
        end: addDays(ovulationDay, 1),
    };
};

export const getStatusMessage = (today: Date, data: CycleData): string => {
    const nextPeriod = estimateNextPeriod(data);
    const diff = differenceInDays(nextPeriod, today);

    if (diff < 0) return 'Period is late';
    if (diff === 0) return 'Period expected today';
    return `Next period in ${diff} days (estimated)`;
};
