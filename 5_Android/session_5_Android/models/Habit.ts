export interface Habit{
    title: string;
    description?: string;
    checks?: Date[];
    times_in_interval?: number;
    seconds_in_interval?: number;
    start_date?: Date;
    streak_count?: number;
}