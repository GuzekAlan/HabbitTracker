package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.model.Habit;
import guzek.alan.habbittracker.service.HabitService;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;
import java.util.List;

@Controller
public class HabitQuery {
    @Inject
    private HabitService habitService;

    @QueryMapping
    public List<Habit> habits() {
        return this.habitService.getHabits();
    }

    @QueryMapping
    public List<Habit> userHabits(@Argument Long userId) {
        return this.habitService.getUserHabits(userId);
    }
}
