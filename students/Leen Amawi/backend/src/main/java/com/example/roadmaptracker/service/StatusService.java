package com.example.roadmaptracker.service;
import com.example.roadmaptracker.dto.StatusRequest;
import com.example.roadmaptracker.dto.StatusResponse;
import com.example.roadmaptracker.entity.Status;
import com.example.roadmaptracker.mapper.StatusMapper;
import com.example.roadmaptracker.repository.StatusRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.example.roadmaptracker.repository.TaskRepository;
import java.util.List;

@Service
public class StatusService {
    private final StatusRepository statusRepository;
    private final TaskRepository taskRepository;
   public StatusService(StatusRepository statusRepository,TaskRepository taskRepository) {
    this.statusRepository = statusRepository;
    this.taskRepository = taskRepository;
}

    public List<StatusResponse> list() {
        return statusRepository.findAllByOrderByPositionAsc().stream().map(StatusMapper::toResponse).toList();
    }

    public StatusResponse create(StatusRequest request) {
        if (statusRepository.existsByName(request.name())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Status name already exists");
        }
        Status status = StatusMapper.toEntity(request);
        Status saved = statusRepository.save(status);
        return StatusMapper.toResponse(saved);
    }

    public StatusResponse get(Long id) {
        Status status = statusRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Status not found"));
        return StatusMapper.toResponse(status);
    }
    public StatusResponse update(Long id, StatusRequest request) {
        Status status = statusRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Status not found"));
        status.setName(request.name());
        status.setPosition(request.position());
        status.setColor(request.color());
        Status updated = statusRepository.save(status);
        return StatusMapper.toResponse(updated);
    }
    public void delete(Long id) {
        Status status = statusRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Status not found"));
         if (taskRepository.existsByStatusId(id)) {
        throw new ResponseStatusException(HttpStatus.CONFLICT,"Status is still in use");
    }
        statusRepository.delete(status);
    }
}