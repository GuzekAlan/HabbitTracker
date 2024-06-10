package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.Habit;
import guzek.alan.habbittracker.repository.HabitRepository;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class HabitService {
    @Inject
    private HabitRepository habitRepository;

    @Transactional(readOnly = true)
    public Optional<Habit> getHabit(Long id) {
        return this.habitRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Habit> getHabits() {
        return this.habitRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Habit> getUserHabits(Long userID){
        return this.habitRepository.findByHabitRecords_User_Id(userID);
    }

    @Transactional
    public Habit createHabit(String name, String color, Integer difficulty){
        Habit habit = new Habit();
        habit.setColor(color);
        habit.setDifficulty(difficulty);
        habit.setName(name);
        return this.habitRepository.save(habit);
    }
}
