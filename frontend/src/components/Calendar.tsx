import type  { Habit } from '../graphql/types';
import { useNavigate } from 'react-router-dom';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const habits: Habit[] = [
    { id: 1, name: 'Exercise', color: '#CA0940', completed: [true, false, true, false, true, false, true] },
    { id: 2, name: 'Read', color: '#440F00', completed: [false, true, false, true, false, true, false] },
    // Add more habits as needed
  ];

const CalendarCell = (props: {color: string}) => {
    return (
        <td className='border-2 border-blue-300'>
            <div className='w-8 h-8 m-2 rounded-md' style={{background: props.color}} ></div>
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
    return (
        <div>
            <table className='table-fixed border-spacing-2 border-2 border-collapse border-blue-300 text-xl font'>
                <thead>
                    <tr>
                        <th>Habit</th>
                        {daysOfWeek.map(day =>
                            <th className='border-2 border-blue-300'>{day}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {habits.map(habit => (
                    <tr key={habit.id}>
                        <td className='p-2 border-2 border-blue-300' style={{color: habit.color}}>{habit.name}</td>
                        {habit.completed.map((done, _index) => (
                            <CalendarCell color={done ? habit.color : 'white'} />
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