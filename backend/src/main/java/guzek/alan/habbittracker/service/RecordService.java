package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.Record;
import guzek.alan.habbittracker.model.UserHabit;
import guzek.alan.habbittracker.repository.RecordRepository;
import guzek.alan.habbittracker.repository.UserHabitRepository;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Optional;

@Service
public class RecordService {
    @Inject
    private RecordRepository recordRepository;

    @Inject UserHabitRepository userHabitRepository;

    @Transactional
    public Record createRecord(Long userHabitId, Date date) {
        Record record = new Record();
        record.setDate(date);
        Optional<UserHabit> userHabit = this.userHabitRepository.findById(userHabitId);
        System.out.println(userHabit.isPresent());
        if(!userHabit.isPresent()) return null;

        record.setUserHabit(userHabit.get());

        return this.recordRepository.save(record);
    }
}
