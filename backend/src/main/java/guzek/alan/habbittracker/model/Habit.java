package guzek.alan.habbittracker.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@ToString
public class Habit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String color;

    @NonNull
    private Integer difficulty;

    @OneToMany(mappedBy = "habit")
    private Set<HabitRecord> habitRecords;
}