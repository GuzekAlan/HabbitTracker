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
import { useLazyQuery, useMutation } from "@apollo/client";
import { CREATE_USER } from "@/graphql/mutations";
import { LOGIN_USER } from "@/graphql/queries";
import { useToast } from "@/components/shadcn/ui/use-toast";

function Auth() {
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useLazyQuery(LOGIN_USER);

  const { toast } = useToast();

  function onRegister(values) {
    createUser({ variables: values }).catch(() => {
      toast({
        title: "Error",
        description: "This user already exists",
        variant: "destructive",
      });
    });
  }

  function OnLogin(values) {
    loginUser({ variables: values })
      .then((result) => {
        localStorage.setItem("userId", result.data.authToken);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Wrong credentials",
          variant: "destructive",
        });
      });
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
