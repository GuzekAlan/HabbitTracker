package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.model.Habit;
import guzek.alan.habbittracker.service.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class HabitQuery {
    final private HabitService habitService;

    @Autowired
    public HabitQuery(final HabitService habitService) {
        this.habitService = habitService;
    }

    @QueryMapping
    public List<Habit> getHabits() {
        return this.habitService.getHabits();
    }

    @QueryMapping
    public Optional<Habit> getHabit(@Argument Long id) {
        return this.habitService.getHabit(id);
    }
}
