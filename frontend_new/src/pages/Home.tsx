import Footer from "@/components/Footer";
import HabitCalendar from "@/components/HabitCalendar";
import Header from "@/components/Header";

function Home() {
  const dates = [new Date("2024-06-29"), new Date("2024-06-30")];

  return (
    <div className="flex flex-col w-full min-h-screen gap-2">
      <Header />
      <div>Home Page</div>
      <HabitCalendar dates={dates} loading={false} />
      <Footer />
    </div>
  );
}

export default Home;
