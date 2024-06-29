import { useMutation, useQuery } from "@apollo/client";
import { Card, CardContent, CardHeader, CardTitle } from "./shadcn/ui/card";
import { GET_HABITS } from "@/graphql/queries";
import { Skeleton } from "./shadcn/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn/ui/select";
import { Button } from "./shadcn/ui/button";
import { CREATE_USER_HABIT } from "@/graphql/mutations";
import useAuth from "@/hooks/useUserStore";
import { useState } from "react";
import { useToast } from "./shadcn/ui/use-toast";

function AddHabit() {
  const { data, loading } = useQuery(GET_HABITS);
  const [addUserHabit] = useMutation(CREATE_USER_HABIT);
  const { userId } = useAuth();
  const [habitId, setHabitId] = useState<string | null>(null);

  const { toast } = useToast();

  async function addHabit() {
    addUserHabit({
      variables: {
        habitId: habitId,
        userId: userId(),
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error",
          description: "Failed to add habit",
          variant: "destructive",
        });
      });
  }

  if (loading) {
    return <Skeleton className="w-[10rem] h-[15rem]" />;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Habit</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-cetner">
        <Select onValueChange={setHabitId}>
          <SelectTrigger>
            <SelectValue placeholder="Select a habit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.habits.map((habit) => (
                <SelectItem key={habit.id} value={habit.id}>
                  <div className="flex flex-row gap-1 items-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: habit.color }}
                    />
                    <div>
                      {habit.name} ({habit.difficulty})
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="max-w-max" onClick={addHabit}>
          Add
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddHabit;
