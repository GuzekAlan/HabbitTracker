package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.repository.HabitRecordRepository;
import jakarta.inject.Inject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class HabitRecordService {
    @Inject
    private HabitRecordRepository habitRecordRepository;

}
