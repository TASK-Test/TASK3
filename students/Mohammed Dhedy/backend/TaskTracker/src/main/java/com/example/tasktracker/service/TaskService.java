package com.example.tasktracker.service;

import java.time.Instant;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.tasktracker.dto.taskdtos.*;
import com.example.tasktracker.entity.User;
import com.example.tasktracker.entity.Status;
import com.example.tasktracker.entity.Task;
import com.example.tasktracker.repository.StatusRepository;
import com.example.tasktracker.repository.TaskRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service 
public class TaskService {
    private final TaskRepository repository;
    private  final StatusRepository statusRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public TaskService(TaskRepository repository,StatusRepository statusRepository){
        this.repository=repository;
        this.statusRepository=statusRepository;
    }
    public List<TaskResponse> list(){
        return repository.findAll()
        .stream()
        .map(TaskMapper::toResponse)
        .toList();
    }
    public TaskResponse create(TaskRequest request){
        User user=entityManager.find(User.class, request.createdById());
        if(user==null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found!");
        }
        Status status=statusRepository.findById(request.statusId())
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Sstatus not found"));
        Task task=repository.save(TaskMapper.toTask(request, status, user));
        return TaskMapper.toResponse(task);
    }
    public TaskResponse get(Long id){
        Task task=repository.findById(id)
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"TASK NOT FOUND !"));

        return TaskMapper.toResponse(task);
    }
    public TaskResponse update(TaskRequest request,Long id){
        User user=entityManager.find(User.class, request.createdById());
        if(user==null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found!");
        }
        Status status=statusRepository.findById(request.statusId())
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Sstatus not found"));
        
        Task task=repository.findById(id)
        .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"task not found!"));
        task.setTitle(request.title());
        task.setDescription(request.description());
        task.setStatus(status);
        task.setPriority(request.priority());
        task.setTargetDate(request.targetDate());
        task.setCreatedBy(user);
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
}
