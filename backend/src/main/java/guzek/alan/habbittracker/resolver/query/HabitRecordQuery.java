package guzek.alan.habbittracker.resolver.query;

import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;
import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.service.HabitRecordService;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Controller
public class HabitRecordQuery {
    @Inject
    private HabitRecordService habitRecordService;

    @QueryMapping
    public Optional<HabitRecord> habitRecord(@Argument Long id) {
        return this.habitRecordService.getHabitRecord(id);
    }

    @QueryMapping
    public List<HabitRecord> habitRecords(@Argument Long userId, @Argument Long habitId, @Argument String dateFrom, @Argument String dateTo) {
        return this.habitRecordService.getUserHabitRecordsBetween(userId, habitId, Date.valueOf(dateFrom), Date.valueOf(dateTo));
    }
}
