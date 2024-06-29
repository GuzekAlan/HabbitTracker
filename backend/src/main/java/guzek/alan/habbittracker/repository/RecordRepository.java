package guzek.alan.habbittracker.repository;


import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import guzek.alan.habbittracker.model.HabitRecord;

@Repository
public interface RecordRepository extends JpaRepository<HabitRecord, Long> {

    Set<HabitRecord> findByUserHabitId(Long userHabitId);
}
