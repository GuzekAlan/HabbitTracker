import { useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_HABITS, GET_USER_HABITS } from '../graphql/queries';
import moment from 'moment-timezone';

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
    const userId = 1;
    const [startDate, _setStartDate] = useState(moment().tz("Europe/Warsaw").startOf("isoWeek"));
    
    const dates = useMemo(() => {
        return Array.from(Array(7).keys()).map((i) => {
            console.log(i)
            const returnDate = startDate.add(i, "days").format("YYYY-MM-DD");
            console.log(returnDate);
            return returnDate;

        })
    }, [startDate])

    const {loading, error, data} = useQuery(GET_USER_HABITS, {variables: {userId}});
    if(loading) return null;
    if(error) return `Error! ${error}`

    console.log(data);
    console.log(dates);

    const handleToggleHabit = (habitId: number,  date: string) => {
        // const newHabits = habits.map(habit => habit.id === habitId ? {...habit, completed: habit.completed.map((done, i) => i == dayIndex ? !done : done)} : habit);
        // setHabits(newHabits);

    }

    return (
        <div>
            <table className='table-fixed border-spacing-2 border-2 border-collapse border-blue-300 text-xl font'>
                <thead>
                    <tr>
                        <th>Habit</th>
                        <th>Difficulty</th>
                        {daysOfWeek.map(day =>
                            <th className='border-2 border-blue-300' key={day}>{day}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.userHabits.map(habit => (
                    <tr>
                        <td className='p-2 border-2 border-blue-300' style={{backgroundColor: habit.color}}>{habit.name}</td>
                        <td className="border-2 border-blue-300 text-center">{habit.difficulty}</td>
                        {dates.map(date => (
                            <CalendarCell color={habit.color} done={habit.habitRecords.map(record => record.date).includes(date)} onClick={() => handleToggleHabit(habit.id, date)}/>
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