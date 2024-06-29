package guzek.alan.habbittracker.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import guzek.alan.habbittracker.model.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
}
