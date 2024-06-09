package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByLogin(String login);

    public List<User> findByHabitRecords_Habit_Id(Long habitId);
}
