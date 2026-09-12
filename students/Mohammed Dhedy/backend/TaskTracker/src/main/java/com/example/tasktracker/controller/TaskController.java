package com.example.tasktracker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasktracker.dto.taskdtos.*;
import com.example.tasktracker.service.TaskService;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service){
        this.service=service;
    }

    @GetMapping
    public List<TaskResponse> list() {
        return service.list();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> get(@PathVariable Long id){
        return ResponseEntity.ok(service.get(id));
    }

    @PostMapping
    public ResponseEntity<TaskResponse> create(@RequestBody TaskRequest request){
        TaskResponse response=service.create(request);
        URI location=URI.create("/api/tasks/"+response.id());
        return ResponseEntity.created(location).body(response);
    }

    @PutMapping("/{id}")
    public TaskResponse update(@RequestBody TaskRequest request,@PathVariable Long id){
        return service.update(request, id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
