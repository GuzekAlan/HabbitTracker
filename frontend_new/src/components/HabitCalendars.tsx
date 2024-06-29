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

type HabitCalendarsProps = {
  userHabits: HabitCalendarProps[];
};

function HabitCalendars({ userHabits }: HabitCalendarsProps) {
  console.log(userHabits);
  return (
    <div className="grid gap-2">
      {userHabits.map((userHabit) => (
        <HabitCalendar key={userHabit.id} {...userHabit} />
      ))}
    </div>
  );
}

function HabitCalendar({ habit, records }: HabitCalendarProps) {
  function removeUserHabit() {
    console.log("Remove habit");
  }

  return (
    <Card style={{ borderColor: habit.color }}>
      <CardHeader>
        <CardTitle style={{ color: habit.color }}>{habit.name}</CardTitle>
        <CardDescription className="p-2">
          <div>Difficulty: {habit.difficulty}</div>
          <div>Records: {records.length}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="multiple"
          onSelect={(v) => {
            console.log(v);
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

export default HabitCalendars;
