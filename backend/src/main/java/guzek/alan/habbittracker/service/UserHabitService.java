package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.repository.UserHabitRepository;
import jakarta.inject.Inject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserHabitService {
    @Inject
    private UserHabitRepository userHabitRepository;

}
