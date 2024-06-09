package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.repository.UserRepository;
import guzek.alan.habbittracker.model.User;
import jakarta.inject.Inject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Inject
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public Optional<User> getUser(Long id) {
        return this.userRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }
}
