package guzek.alan.habbittracker.resolver.mutation;

import guzek.alan.habbittracker.service.HabitService;
import guzek.alan.habbittracker.model.Habit;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class HabitMutation{
    final private HabitService habitService;

    @Autowired
    public HabitMutation(HabitService habitService) {
        this.habitService = habitService;
    }

    @MutationMapping
    public Habit createHabit(@Argument String name, @Argument String description, @Argument int difficulty) {
        return this.habitService.createHabit(name, description, difficulty);
    }
}
