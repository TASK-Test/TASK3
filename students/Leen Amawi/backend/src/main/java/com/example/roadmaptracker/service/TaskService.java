package com.example.roadmaptracker.service;

import com.example.roadmaptracker.dto.TaskRequest;
import com.example.roadmaptracker.dto.TaskResponse;
import com.example.roadmaptracker.repository.StatusRepository;
import com.example.roadmaptracker.repository.TaskRepository;
import com.example.roadmaptracker.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
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
        throw new UnsupportedOperationException();
    }

    public TaskResponse get(Long id) {
        throw new UnsupportedOperationException();
    }

    public TaskResponse update(Long id, TaskRequest request) {
        throw new UnsupportedOperationException();

    }

    public void delete(Long id) {
        throw new UnsupportedOperationException();

    }
}