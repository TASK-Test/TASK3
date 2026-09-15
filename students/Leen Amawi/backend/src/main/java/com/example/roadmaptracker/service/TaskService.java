package com.example.roadmaptracker.service;
import com.example.roadmaptracker.dto.TaskRequest;
import com.example.roadmaptracker.dto.TaskResponse;
import com.example.roadmaptracker.repository.StatusRepository;
import com.example.roadmaptracker.repository.TaskRepository;
import com.example.roadmaptracker.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.roadmaptracker.entity.Task;
import com.example.roadmaptracker.mapper.TaskMapper;
@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final StatusRepository statusRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository, StatusRepository statusRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.statusRepository = statusRepository;
        this.userRepository = userRepository;
    }

    public TaskResponse create(TaskRequest request) {
        throw new UnsupportedOperationException();
    }

    public List<TaskResponse> list() {
        return taskRepository.findAll().stream().map(TaskMapper::toResponse).toList();
    }

    public TaskResponse get(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    return TaskMapper.toResponse(task);
    }

    public TaskResponse update(Long id, TaskRequest request) {
        throw new UnsupportedOperationException();

    }

    public void delete(Long id) {
        throw new UnsupportedOperationException();

    }
}