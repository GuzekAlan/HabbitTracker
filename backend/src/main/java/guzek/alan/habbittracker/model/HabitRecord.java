package guzek.alan.habbittracker.model;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.*;
import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@ToString(exclude = {"userHabit"})
@EqualsAndHashCode(exclude = {"userHabit"})
public class HabitRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_habit_id", nullable = false)
    private UserHabit userHabit;

    @DateTimeFormat(pattern  = "dd-mm-yyyy")
    @Column(nullable = false)
    private Date date;
}