import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CalendarCell = (props: {color: string, done: boolean, onClick: (e: React.MouseEvent<HTMLDivElement>) => void;}) => {
    return (
        <td className='border-2 border-blue-300'>
            <div    
                className='w-8 h-8 m-2 rounded-md border-2 cursor-pointer'  
                style={{background: props.done ? props.color : 'white', borderColor:  props.color}}
                onClick={props.onClick}
            ></div>
        </td>
    )
}

const AddHabitButton = () => {
    const navigate = useNavigate()
    
    return (
        <button className='bg-blue-100 px-3 py-1 text-blue-600 text-base rounded-full' onClick={() => navigate ('/add-habit')}>
             Add Habit 
        </button>
    )
}

const Calendar = () => {
    const [habits, setHabits] = useState([
        { id: 1, name: 'Exercise', color: '#CA0940', completed: [true, false, true, false, true, false, true] },
        { id: 2, name: 'Read', color: '#440F00', completed: [false, true, false, true, false, true, false] },
        // Add more habits as needed
      ]);

    const handleToggleHabit = (habitId: number,  dayIndex: number) => {
        const newHabits = habits.map(habit => habit.id === habitId ? {...habit, completed: habit.completed.map((done, i) => i == dayIndex ? !done : done)} : habit);
        setHabits(newHabits);
    }

    return (
        <div>
            <table className='table-fixed border-spacing-2 border-2 border-collapse border-blue-300 text-xl font'>
                <thead>
                    <tr>
                        <th>Habit</th>
                        {daysOfWeek.map(day =>
                            <th className='border-2 border-blue-300' key={day}>{day}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {habits.map(habit => (
                    <tr>
                        <td className='p-2 border-2 border-blue-300' style={{color: habit.color}}>{habit.name}</td>
                        {habit.completed.map((done, index) => (
                            <CalendarCell color={habit.color} done={done} onClick={() => handleToggleHabit(habit.id, index)} />
                        ))}
                    </tr>
                    ))}
                    <tr>
                        <td className='p-2'><AddHabitButton /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;