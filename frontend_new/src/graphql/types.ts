export type User = {
    id: number;
    login: string;
    habitRecords: HabitRecord[];
}

export type HabitRecord = {
    date: string;
    habit: Habit;
    user: User;
}

export type Habit = {
    id: number;
    name: string;
    color: string;
    difficulty: number;
    habitRecords: HabitRecord[];
}