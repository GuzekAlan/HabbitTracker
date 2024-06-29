package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.model.UserHabit;
import guzek.alan.habbittracker.repository.RecordRepository;
import guzek.alan.habbittracker.repository.UserHabitRepository;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Optional;
import java.util.Set;

@Service
public class RecordService {
    @Inject
    private RecordRepository recordRepository;

    @Inject UserHabitRepository userHabitRepository;

    @Transactional
    public Set<HabitRecord> getuserHabitRecords(Long userHabitId) {
        return this.recordRepository.findByUserHabitId(userHabitId);
    }

    @Transactional
    public HabitRecord createRecord(Long userHabitId, Date date) {
        HabitRecord record = new HabitRecord();
        record.setDate(date);
        Optional<UserHabit> userHabit = this.userHabitRepository.findById(userHabitId);
        System.out.println(userHabit.isPresent());
        if(!userHabit.isPresent()) return null;

        record.setUserHabit(userHabit.get());

        return this.recordRepository.save(record);
    }

    @Transactional
    public Boolean deleteRecord(Long id) {
        Optional<HabitRecord> record = this.recordRepository.findById(id);
        if(!record.isPresent()) {
            return false;
        }
        this.recordRepository.delete(record.get());
        return true;
    }
}
