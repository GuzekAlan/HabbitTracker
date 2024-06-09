package guzek.alan.habbittracker.resolver.mutation;

import guzek.alan.habbittracker.model.User;
import guzek.alan.habbittracker.service.UserService;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;

@Controller
public class UserMutation {
    @Inject
    private UserService userService;

    @MutationMapping
    public User createUser(@Argument String login, @Argument String password) {
        return this.userService.createUser(login, password);
    }
}
