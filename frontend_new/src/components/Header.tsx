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
          {userId() && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/create_habit">
                  Create Habit
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          {!userId() && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/auth">Log In</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {userId() && (
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
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Header;
