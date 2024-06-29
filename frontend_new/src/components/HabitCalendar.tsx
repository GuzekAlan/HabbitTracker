import { Skeleton } from "./shadcn/ui/skeleton";
import { Calendar } from "./shadcn/ui/calendar";

export type HabitCalendarProps = {
  dates: Date[];
  loading: boolean;
};

function HabitCalendar({ dates, loading }: HabitCalendarProps) {
  if (loading) return <Skeleton className="w-[10rem]" />;

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={(v) => {
        console.log(v);
      }}
      className="rounded-md border"
    />
  );
}

export default HabitCalendar;
