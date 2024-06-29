package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.service.UserService;
import jakarta.inject.Inject;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.*;

@Controller
public class UserQuery {
    @Inject
    private UserService userService;

    @QueryMapping
    public String authToken(@Argument String login, @Argument String password) {
        return this.userService.getToken(login, password);
    }
}
