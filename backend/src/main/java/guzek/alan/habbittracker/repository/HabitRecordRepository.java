package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.HabitRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface HabitRecordRepository extends JpaRepository<HabitRecord, Long> {
    List<HabitRecord> findByDateBetween(Date from, Date to);
}
