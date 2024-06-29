import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./shadcn/ui/form";
import { Input } from "./shadcn/ui/input";
import { Button } from "./shadcn/ui/button";

const RegisterFormSchema = z.object({
  login: z.string().min(1, { message: "Login cannot be empty" }),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

type AuthFormProps = {
  onSubmit: (values: z.infer<typeof RegisterFormSchema>) => void;
  buttonText: string;
};

function AuthForm(props: AuthFormProps) {
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className="flex flex-col max-w-max gap-2"
      >
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormMessage />
              <Input {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormMessage />
              <Input type="password" {...field} />
            </FormItem>
          )}
        />
        <Button type="submit">{props.buttonText}</Button>
      </form>
    </Form>
  );
}

export default AuthForm;
