package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.repository.HabitRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class HabitRecordService {

    final private HabitRecordRepository habitRecordRepository;

    @Autowired
    public HabitRecordService(HabitRecordRepository habitRecordRepository) {this.habitRecordRepository = habitRecordRepository;}

    @Transactional
    public List<HabitRecord> getHabitRecordsInBetween(Date from, Date to, Long habitId) {
        return this.habitRecordRepository.findByDateBetweenAndHabit_Id(from, to, habitId);
    }

}
