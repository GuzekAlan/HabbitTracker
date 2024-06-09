package guzek.alan.habbittracker.resolver.mutation;

import guzek.alan.habbittracker.service.HabitService;
import guzek.alan.habbittracker.model.Habit;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;

@Controller
public class HabitMutation{
    @Inject
    private HabitService habitService;

   @MutationMapping
   public Habit createHabit(@Argument String name, @Argument String color, @Argument Integer difficulty) {
        return this.habitService.createHabit(name, color, difficulty);
   }
}
