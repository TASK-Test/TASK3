package com.example.roadmaptracker.controller;
import com.example.roadmaptracker.dto.StatusRequest;
import com.example.roadmaptracker.dto.StatusResponse;
import com.example.roadmaptracker.service.StatusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/statuses")
public class StatusController {

    private final StatusService statusService;
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping
    public ResponseEntity<List<StatusResponse>> list() {
        return ResponseEntity.ok(statusService.list());
    }

    @PostMapping
    public ResponseEntity<StatusResponse> create(@RequestBody StatusRequest request)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(statusService.create(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatusResponse> get(@PathVariable Long id) {
        return ResponseEntity.ok(statusService.get(id));
    }
    @PutMapping("/{id}")
    public ResponseEntity<StatusResponse> update(@PathVariable Long id, @RequestBody StatusRequest request) {
        return ResponseEntity.ok(statusService.update(id, request));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        statusService.delete(id);
        return ResponseEntity.noContent().build();
    }

}