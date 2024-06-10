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
@EqualsAndHashCode(exclude = {"habitRecords"})
@ToString(exclude = {"habitRecords"})
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

    @OneToMany(mappedBy = "habit", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<HabitRecord> habitRecords;
}