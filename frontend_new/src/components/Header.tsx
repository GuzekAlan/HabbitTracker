import { useNavigate } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./shadcn/ui/breadcrumb";
import useAuth from "@/hooks/useUserStore";

function Header() {
  const { userId, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full p-2 bg-primary">
      <Breadcrumb>
        <BreadcrumbList className="space-x-8 text-2xl text-primary-foreground">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {userId() && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/create_habit">Create Habit</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem>
            <BreadcrumbLink href="/auth">Log In</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <div
              role="button"
              onClick={() => {
                logOut();
                navigate("/auth");
              }}
            >
              Log Out
            </div>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Header;
