package com.example.roadmaptracker.service;

import com.example.roadmaptracker.dto.TaskRequest;
import com.example.roadmaptracker.dto.TaskResponse;
import com.example.roadmaptracker.repository.StatusRepository;
import com.example.roadmaptracker.repository.TaskRepository;
import com.example.roadmaptracker.repository.UserRepository;

import java.util.List;

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
}