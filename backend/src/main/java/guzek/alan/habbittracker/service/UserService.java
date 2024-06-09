
package guzek.alan.habbittracker.service;

import guzek.alan.habbittracker.repository.UserRepository;
import guzek.alan.habbittracker.model.User;
import jakarta.inject.Inject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private String salt = new String("ZTI_BACKEND");

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

    @Transactional(readOnly = true)
    public List<User> getHabitsUsers(Long habitId) {
        return this.userRepository.findByHabitRecords_Habit_Id(habitId);
    }

    @Transactional
    public User createUser(String login, String password){

        User user = new User();
        user.setLogin(login);
        user.setPassword(hashPassword(password));

        return this.userRepository.save(user);
    }

    public String getToken(String login, String password){
        User user = this.userRepository.findByLogin(login);
        if(user == null) {
            return null;
        }

        if(hashPassword(password).equals(hashPassword(user.getPassword()))){
            return "AUTH";
        }

        return "NO AUTH";
    }

    private String hashPassword(String password) {
        return password + this.salt;
    }
}
