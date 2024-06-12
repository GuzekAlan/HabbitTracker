import Calendar from "../components/Calendar";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Header text='Habit Tracker'/>
            <Calendar />
        </div>
    );
};

export default Home;