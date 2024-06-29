import { useMemo } from "react";
import { Button } from "./shadcn/ui/button";
import { Calendar } from "./shadcn/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn/ui/card";

type HabitCalendarProps = {
  id: string;
  habit: { id: number; name: string; difficulty: number; color: string };
  records: { date: string }[];
};

function HabitCalendar({ habit, records }: HabitCalendarProps) {
  function removeUserHabit() {
    console.log("Remove habit");
  }

  const dates = useMemo(
    () => records.map((record) => new Date(record.date)),
    [records]
  );

  return (
    <Card style={{ borderColor: habit.color }}>
      <CardHeader>
        <CardTitle style={{ color: habit.color }}>{habit.name}</CardTitle>
        <CardDescription>
          Difficulty: {habit.difficulty} <br />
          Records: {records.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="multiple"
          selected={dates}
          onDayClick={(date) => {
            console.log(date);
          }}
          className="rounded-md border "
        />
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={removeUserHabit}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}

export default HabitCalendar;
