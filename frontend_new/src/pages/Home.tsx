import AddHabit from "@/components/AddHabit";
import Footer from "@/components/Footer";
import HabitCalendar from "@/components/HabitCalendar";
import Header from "@/components/Header";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { GET_USER_HABITS } from "@/graphql/queries";
import useAuth from "@/hooks/useUserStore";
import { useQuery } from "@apollo/client";

function Home() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_USER_HABITS, {
    variables: { userId: userId() },
  });

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-2">
      <Header />
      <div className="flex flex-row flex-wrap gap-2 items-start">
        <AddHabit />
        {loading && <Skeleton className="w-[90vw] h-[40vh]" />}
        {error && (
          <div className="text-destructive-foreground">
            Error: {error.message}
          </div>
        )}
        {data &&
          data.userHabits.map((userHabit) => (
            <HabitCalendar key={userHabit.id} {...userHabit} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
