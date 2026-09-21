package com.example.roadmaptracker.service;
import com.example.roadmaptracker.dto.TaskRequest;
import com.example.roadmaptracker.dto.TaskResponse;
import com.example.roadmaptracker.repository.StatusRepository;
import com.example.roadmaptracker.repository.TaskRepository;
import com.example.roadmaptracker.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
    var status = statusRepository.findById(request.statusId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Status not found"));
    var user = userRepository.findById(1L).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found"));
    Task task = new Task();
    task.setTitle(request.title());
    task.setDescription(request.description());
    task.setStatus(status);
    task.setPriority(request.priority());
    task.setTargetDate(request.targetDate());
    task.setCreatedBy(user);
    Task savedTask = taskRepository.save(task);
    return TaskMapper.toResponse(savedTask);
    }

    public List<TaskResponse> list() {
        return taskRepository.findAll().stream().map(TaskMapper::toResponse).toList();
    }

    public TaskResponse get(Long id) {
        Task task = taskRepository.findById(id) .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Task not found"));
    return TaskMapper.toResponse(task);
    }

    public TaskResponse update(Long id, TaskRequest request) {
    Task task = taskRepository.findById(id) .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,  "Task not found"));
    var status = statusRepository.findById(request.statusId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Status not found"));
    task.setTitle(request.title());
    task.setDescription(request.description());
    task.setStatus(status);
    task.setPriority(request.priority());
    task.setTargetDate(request.targetDate());
    Task updatedTask = taskRepository.save(task);
    return TaskMapper.toResponse(updatedTask);
    }

    public void delete(Long id) {
         Task task = taskRepository.findById(id) .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
    taskRepository.delete(task);
    }
}