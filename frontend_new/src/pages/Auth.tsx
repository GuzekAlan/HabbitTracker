import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import AuthForm from "@/components/AuthForm";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "@/graphql/mutations";
import { LOGIN_USER } from "@/graphql/queries";
import { useToast } from "@/components/shadcn/ui/use-toast";

function Auth() {
  const [createUser] = useMutation(CREATE_USER);

  const { toast } = useToast();

  function onRegister(values) {
    createUser({ variables: values }).catch((error) => {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to execute action",
        variant: "destructive",
      });
    });
  }

  function OnLogin(values) {
    const { data } = useQuery(LOGIN_USER, { variables: values });
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-[3vh]">
      <Header />
      <Card className="max-w-max p-4">
        <Tabs defaultValue="login" className="w-[30rem]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="flex flex-col items-center">
            <AuthForm buttonText="Login" onSubmit={OnLogin} />
          </TabsContent>
          <TabsContent value="register" className="flex flex-col items-center">
            <AuthForm buttonText="Register" onSubmit={onRegister} />
          </TabsContent>
        </Tabs>
      </Card>
      <Footer />
    </div>
  );
}

export default Auth;
