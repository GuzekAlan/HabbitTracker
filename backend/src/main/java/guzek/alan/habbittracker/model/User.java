package guzek.alan.habbittracker.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

@Data
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "zti_user")
@ToString(exclude = {"habitRecords"})
@EqualsAndHashCode(exclude = {"habitRecords"})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String login;

    @NonNull
    private String password;

    @OneToMany(mappedBy = "user")
    Set<HabitRecord> habitRecords;
}
