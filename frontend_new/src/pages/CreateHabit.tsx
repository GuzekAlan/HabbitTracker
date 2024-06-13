import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { CREATE_HABIT } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useToast } from "@/components/shadcn/ui/use-toast";

const HabitSchema = z.object({
    name: z.string().min(1, {message: "Name must contain at least 1 character"}),
    color: z.string(),
    difficulty: z.number().min(1).max(10),
});


function HabitForm() {
    const form = useForm<z.infer<typeof HabitSchema>>({
        resolver: zodResolver(HabitSchema),
        defaultValues: {
            name: "",
            color: "#FFFFFF",
            difficulty: 3,
        }
    });

    const {toast} = useToast();

    const [createHabit, {loading, error}] = useMutation(CREATE_HABIT);

    function onSubmit(values: z.infer<typeof HabitSchema>) {
        createHabit({variables: values});
        toast({
            title: "Error",
            description: "Failed to create Habit",
            variant: "destructive"
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full items-center">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
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
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Color</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input type="color" {...field} className="w-[3rem] aspect-square"/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="difficulty"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Difficulty</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
            <Button type="submit">Create Habit</Button>
            </form>
        </Form>
    )
}

function CreateHabit() {
    return (
        <div className="flex flex-col w-full min-h-screen gap-2">
            <Header />
            <HabitForm />
            <Footer />
        </div>
    );
}

export default CreateHabit;