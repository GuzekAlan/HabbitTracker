package guzek.alan.habbittracker.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@ToString
public class UserHabit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name="habit_id", nullable = false)
    private Habit habit;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;
}
