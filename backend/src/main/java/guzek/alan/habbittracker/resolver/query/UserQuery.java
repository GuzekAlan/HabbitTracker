package guzek.alan.habbittracker.resolver.query;

import guzek.alan.habbittracker.model.User;
import guzek.alan.habbittracker.service.UserService;
import jakarta.inject.Inject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class UserQuery {
    @Inject
    private UserService userService;

    @QueryMapping
    public Optional<User> user(@Argument Long id) {
        return this.userService.getUser(id);
    }

    @QueryMapping
    public List<User> users() {
        return this.userService.getAllUsers();
    }
}
