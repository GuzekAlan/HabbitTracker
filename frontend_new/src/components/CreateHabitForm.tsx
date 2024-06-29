import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { CREATE_HABIT } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useToast } from "@/components/shadcn/ui/use-toast";

const HabitSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must contain at least 1 character" }),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
  difficulty: z.number().min(1).max(10),
});

function CreateHabitForm() {
  const form = useForm<z.infer<typeof HabitSchema>>({
    resolver: zodResolver(HabitSchema),
    defaultValues: {
      name: "",
      color: "#FFFFFF",
      difficulty: 3,
    },
  });

  const { toast } = useToast();

  const [createHabit] = useMutation(CREATE_HABIT);

  function onSubmit(values: z.infer<typeof HabitSchema>) {
    createHabit({ variables: values });
    toast({
      title: "Error",
      description: "Failed to create Habit",
      variant: "destructive",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-max gap-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormMessage />
              <FormControl>
                <Input placeholder="Habit Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormMessage />
              <FormControl>
                <Input
                  type="color"
                  {...field}
                  className="w-[3rem] aspect-square"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty</FormLabel>
              <FormMessage />
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="max-w-max">
          Create Habit
        </Button>
      </form>
    </Form>
  );
}

export default CreateHabitForm;
