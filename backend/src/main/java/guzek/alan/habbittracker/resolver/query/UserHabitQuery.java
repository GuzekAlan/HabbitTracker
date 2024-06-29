package guzek.alan.habbittracker.resolver.query;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import guzek.alan.habbittracker.model.UserHabit;
import guzek.alan.habbittracker.service.UserHabitService;
import jakarta.inject.Inject;

@Controller
public class UserHabitQuery {
    @Inject private UserHabitService userHabitService;

    @QueryMapping
    public List<UserHabit> userHabits(@Argument Long userId) {
        return this.userHabitService.getUserHabits(userId);
    }
}
