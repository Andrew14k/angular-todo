@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @GetMapping("/{id}")
    public Task getTask(@PathVariable Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found"));
    }
}
