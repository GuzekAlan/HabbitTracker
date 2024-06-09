package guzek.alan.habbittracker.resolver.mutation;

import jakarta.inject.Inject;
import java.sql.Date;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;

import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.service.HabitRecordService;

@Controller
public class HabitRecordMutation {
    @Inject
    private HabitRecordService habitRecordService;

    @MutationMapping
    public HabitRecord createHabitRecord(@Argument Long userId, @Argument Long habitId, @Argument String date) {
        System.out.println(date);
        return this.habitRecordService.createHabitRecord(userId, habitId, Date.valueOf(date));
    }
}
