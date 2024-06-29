package guzek.alan.habbittracker.model;

import java.util.Set;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(uniqueConstraints = {
    @UniqueConstraint(columnNames = {"habit_id", "user_id"})
})
@ToString(exclude = {"habit", "user"})
@EqualsAndHashCode(exclude = {"habit", "user"})
public class UserHabit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="habit_id", nullable = false)
    private Habit habit;

    @OneToMany(mappedBy = "userHabit", cascade = CascadeType.REMOVE)
    private Set<HabitRecord> records;
}
