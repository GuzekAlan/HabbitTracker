package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.model.Habit;
import guzek.alan.habbittracker.service.HabitService;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class HabitQuery {
    @Inject
    private HabitService habitService;

    @QueryMapping
    public List<Habit> habits() {
        return this.habitService.getHabits();
    }

    @QueryMapping
    public Optional<Habit> habit(@Argument Long id) {
        return this.habitService.getHabit(id);
    }
}
