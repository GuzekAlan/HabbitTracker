package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.Habit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface HabitRepository extends JpaRepository<Habit, Long>{}
