package guzek.alan.habbittracker.repository;

import guzek.alan.habbittracker.model.UserHabit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserHabitRepository extends JpaRepository<UserHabit, Long> {
    List<UserHabit> findByUser_Id(Long userId);
}
