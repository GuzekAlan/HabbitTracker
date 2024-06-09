package guzek.alan.habbittracker.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@ToString
public class HabitRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_habit_id", nullable = false)
    private UserHabit userHabit;

    @DateTimeFormat(pattern  = "dd-mm-yyyy")
    private Date date;
}
