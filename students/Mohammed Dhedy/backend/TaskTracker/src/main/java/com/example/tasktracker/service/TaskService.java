package com.example.tasktracker.service;

import java.time.Instant;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.tasktracker.dto.taskdtos.*;
import com.example.tasktracker.entity.User;
import com.example.tasktracker.entity.Status;
import com.example.tasktracker.entity.Task;
import com.example.tasktracker.repository.StatusRepository;
import com.example.tasktracker.repository.TaskRepository;
import com.example.tasktracker.repository.UserRepository;

@Service 
public class TaskService {
    private final TaskRepository repository;
    private  final StatusRepository statusRepository;
    private final UserRepository userRepository;
    public TaskService(TaskRepository repository,StatusRepository statusRepository,UserRepository userRepository){
        this.repository=repository;
        this.statusRepository=statusRepository;
        this.userRepository=userRepository;
    }
    public List<TaskResponse> list(){
        return repository.findAll()
        .stream()
        .map(TaskMapper::toResponse)
        .toList();
    }
    public TaskResponse create(TaskRequest request){
        User user=getCurrentUser();
        Status status=statusRepository.findById(request.statusId())
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Status not found"));
        Task task=repository.save(TaskMapper.toTask(request, status, user));
        return TaskMapper.toResponse(task);
    }
    public TaskResponse get(Long id){
        Task task=repository.findById(id)
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"TASK NOT FOUND !"));

        return TaskMapper.toResponse(task);
    }
    public TaskResponse update(TaskRequest request,Long id){
        Status status=statusRepository.findById(request.statusId())
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Sstatus not found"));
        
        Task task=repository.findById(id)
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"task not found!"));
        task.setTitle(request.title());
        task.setDescription(request.description());
        task.setStatus(status);
        task.setPriority(request.priority());
        task.setTargetDate(request.targetDate());
        task.setUpdatedAt(Instant.now());

        Task updatedTask=repository.save(task);
        return TaskMapper.toResponse(updatedTask);
    }
    public void delete(Long id){
        if(!repository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"task not found");
        }
        repository.deleteById(id);
    }


    public User getCurrentUser(){
        String username=SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username)
        .orElseThrow(()->new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Authenticated user not found"));
    }
}
