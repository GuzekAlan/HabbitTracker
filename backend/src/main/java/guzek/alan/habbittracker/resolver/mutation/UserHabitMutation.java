package guzek.alan.habbittracker.resolver.mutation;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import guzek.alan.habbittracker.model.UserHabit;
import guzek.alan.habbittracker.service.UserHabitService;
import jakarta.inject.Inject;

@Controller
public class UserHabitMutation {
    @Inject
    private UserHabitService userHabitService;

    @MutationMapping
    public UserHabit createUserHabit(@Argument Long userId, @Argument Long habitId){
        return this.userHabitService.createUserHabit(userId, habitId);
    }
}
