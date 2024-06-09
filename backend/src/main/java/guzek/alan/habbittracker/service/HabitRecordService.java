package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.*;
import guzek.alan.habbittracker.repository.HabitRecordRepository;
import guzek.alan.habbittracker.repository.HabitRepository;
import guzek.alan.habbittracker.repository.UserRepository;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class HabitRecordService {
    @Inject
    private HabitRecordRepository habitRecordRepository;

    @Inject 
    private UserRepository userRepository;

    @Inject
    private HabitRepository habitRepository;


    @Transactional(readOnly = true)
    public Optional<HabitRecord> getHabitRecord(Long id) {
        return this.habitRecordRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<HabitRecord> getUserHabitRecordsBetween(Long userId, Long habitId, Date beginDate, Date endDate) {
        return this.habitRecordRepository.findByDateBetweenAndUser_IdAndHabit_Id(beginDate, endDate, userId, habitId);
    }

    @Transactional
    public HabitRecord createHabitRecord(Long userId, Long habitId, Date date) {
        HabitRecord habitRecord = new HabitRecord();
        Optional<User> user = this.userRepository.findById(userId);
        Optional<Habit> habit = this.habitRepository.findById(habitId);
        if(!user.isPresent() || !habit.isPresent()) {
            return null;
        }

        habitRecord.setDate(date);
        habitRecord.setHabit(habit.get());
        habitRecord.setUser(user.get());

        return this.habitRecordRepository.save(habitRecord);
    }

}
