package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.HabitRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface HabitRecordRepository extends JpaRepository<HabitRecord, Long> {
    List<HabitRecord> findByDateBetweenAndByUser_IdAndHabit_Id(Date from, Date to, Long userId, Long habitId);
}
