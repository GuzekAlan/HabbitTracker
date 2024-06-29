package guzek.alan.habbittracker.resolver.mutation;

import java.sql.Date;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import guzek.alan.habbittracker.model.HabitRecord;
import guzek.alan.habbittracker.service.RecordService;
import jakarta.inject.Inject;

@Controller
public class RecordMutation {
    @Inject
    private RecordService recordService;

    @MutationMapping()
    public HabitRecord createRecord(@Argument Long userHabitId, @Argument String date){
        Date parsedDate = Date.valueOf(date);
        return this.recordService.createRecord(userHabitId, parsedDate);
    }
}
