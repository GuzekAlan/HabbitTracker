import AddHabitForm from "../components/AddHabitForm";
import Header from "../components/Header";

const AddHabit = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Header text='Add Habit'/>
            <AddHabitForm />
        </div>
    );
};

export default  AddHabit;