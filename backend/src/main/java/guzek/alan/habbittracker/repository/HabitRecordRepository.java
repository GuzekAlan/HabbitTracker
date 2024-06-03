package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.HabitRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface HabitRecordRepository extends JpaRepository<HabitRecord, Long> {
    List<HabitRecord> findByDateBetweenAndHabit_Id(Date from, Date to, Long habitId);
}
