package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.model.User;
import guzek.alan.habbittracker.service.UserService;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.context.request.RequestContextHolder;
import java.util.List;
import java.util.Optional;

@Controller
public class UserQuery {
    @Inject
    private UserService userService;

    @QueryMapping
    public Optional<User> user(@Argument Long id) {
        // It was an experiment
        Object userId = RequestContextHolder.getRequestAttributes().getAttribute("userId", 0);
        if(userId != null){
            id = Long.parseLong(userId.toString());
            System.out.println(id);
        }

        return this.userService.getUser(id);
    }

    @QueryMapping
    public List<User> habitUsers(@Argument Long habitId) {
        return this.userService.getHabitsUsers(habitId);
    }

    @QueryMapping
    public String authToken(@Argument String login, @Argument String password) {
        return this.userService.getToken(login, password);
    }
}
