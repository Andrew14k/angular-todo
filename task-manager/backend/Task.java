@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String dueDate;
    private String priority;
    private String status;
    
    // Getters and Setters
}
