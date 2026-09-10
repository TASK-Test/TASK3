package com.example.tasktracker.controller;

import com.example.tasktracker.service.StatusService;
import java.util.List;
import com.example.tasktracker.dto.statusdtos.StatusRequest;
import com.example.tasktracker.dto.statusdtos.StatusResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/statuses")
public class StatusController{
    private final StatusService service;
    public StatusController(StatusService service){
        this.service=service;
    }

    @GetMapping
    public List<StatusResponse> list(){
        return service.list();
    }
    
    @PostMapping
    public ResponseEntity<StatusResponse> create(@RequestBody StatusRequest request){
        StatusResponse response=service.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    @GetMapping("{id}")
    public StatusResponse get(@PathVariable Long id){
        return service.get(id);
    }

}
