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
import { useMutation } from "@apollo/client";
import {
  CREATE_RECORD,
  DELETE_RECORD,
  DELETE_USER_HABIT,
} from "@/graphql/mutations";
import { useToast } from "./shadcn/ui/use-toast";
import moment from "moment";

type HabitCalendarProps = {
  id: string;
  habit: { id: number; name: string; difficulty: number; color: string };
  records: { date: string; id: number }[];
};

function HabitCalendar({ id, habit, records }: HabitCalendarProps) {
  const [deleteHabit] = useMutation(DELETE_USER_HABIT);
  const [addRecord] = useMutation(CREATE_RECORD);
  const [deleteRecord] = useMutation(DELETE_RECORD);
  const { toast } = useToast();

  function removeUserHabit() {
    deleteHabit({ variables: { id } })
      .then((result) => {
        if (result.data.deleteUserHabit) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to remove habit",
          variant: "destructive",
        });
      });
  }

  const dates = useMemo(
    () => records.map((record) => new Date(record.date)),
    [records]
  );

  function toggleRecord(date: Date) {
    const dateString = moment(date).format("YYYY-MM-DD");
    const dateStrings = dates.map((date) => moment(date).format("YYYY-MM-DD"));
    if (dateStrings.includes(dateString) === false) {
      addRecord({
        variables: {
          date: dateString,
          userHabitId: id,
        },
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Failed to add record",
            variant: "destructive",
          });
        });
    } else {
      deleteRecord({
        variables: {
          id: records.find((record) => record.date === dateString)?.id,
        },
      })
        .then((result) => {
          if (result.data.deleteRecord) {
            window.location.reload();
          } else {
            toast({
              title: "Error",
              description: "Could not remove record",
              variant: "default",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: "Error",
            description: "Failed to remove record",
            variant: "destructive",
          });
        });
    }
  }

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
          onDayClick={toggleRecord}
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
