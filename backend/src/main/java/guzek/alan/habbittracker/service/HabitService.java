package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.Habit;
import guzek.alan.habbittracker.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class HabitService {
    final private HabitRepository habitRepository;

    @Autowired
    public HabitService(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    @Transactional
    public Habit createHabit(final String name, String description, final int difficulty) {
        final Habit book = new Habit();
        book.setName(name);
        if(description != null){
            book.setDescription(description);
        }
        book.setDifficulty(difficulty);
        return this.habitRepository.save(book);
    }

    @Transactional(readOnly = true)
    public Optional<Habit> getHabit(Long id) {
        Optional<Habit> temp = this.habitRepository.findById(id);
        System.out.println(temp);
        return temp;
    }

    @Transactional(readOnly = true)
    public List<Habit> getHabits() {
        return this.habitRepository.findAll();
    }
}
