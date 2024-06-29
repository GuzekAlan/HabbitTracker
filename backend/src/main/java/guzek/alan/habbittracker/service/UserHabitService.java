package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.*;
import guzek.alan.habbittracker.repository.HabitRepository;
import guzek.alan.habbittracker.repository.UserHabitRepository;
import guzek.alan.habbittracker.repository.UserRepository;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserHabitService {
    @Inject
    private UserHabitRepository userHabitRepository;

    @Inject 
    private UserRepository userRepository;

    @Inject
    private HabitRepository habitRepository;

    @Transactional
    public UserHabit createUserHabit(Long userId, Long habitId) {
        UserHabit userHabit = new UserHabit();
        Optional<User> user = this.userRepository.findById(userId);
        Optional<Habit> habit = this.habitRepository.findById(habitId);
        if(!user.isPresent() || !habit.isPresent()) {
            return null;
        }

        userHabit.setHabit(habit.get());
        userHabit.setUser(user.get());

        return this.userHabitRepository.save(userHabit);
    }

    @Transactional(readOnly = true)
    public List<UserHabit> getUserHabits(Long userId) {
        return this.userHabitRepository.findByUser_Id(userId);
    }
}
