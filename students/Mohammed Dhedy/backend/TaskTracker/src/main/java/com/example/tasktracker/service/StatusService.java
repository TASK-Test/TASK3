package com.example.tasktracker.service;
import java.util.List;
import com.example.tasktracker.repository.StatusRepository;
import com.example.tasktracker.entity.Status;
import org.springframework.stereotype.Service;
import com.example.tasktracker.dto.statusdtos.StatusMapper;
import com.example.tasktracker.dto.statusdtos.StatusRequest;
import com.example.tasktracker.dto.statusdtos.StatusResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
@Service
public class StatusService{
private final StatusRepository repository;
    public StatusService(StatusRepository repository){
        this.repository=repository;
    }
    public List<StatusResponse> list(){
        return repository.findAllByOrderByPositionAsc()
        .stream()
        .map(StatusMapper::toResponse)
        .toList();
    }
    public StatusResponse create(StatusRequest request){
        if(repository.findByName(request.name()).isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"status is already exist");
        }
        Status status= repository.save(StatusMapper.toStatus(request));
        return StatusMapper.toResponse(status);
    }

    public StatusResponse get(Long id){
        Status status=repository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"status not found"));
        return StatusMapper.toResponse(status);
    }

    public StatusResponse update(Long id,StatusRequest request){
        Status status=repository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"status not found"));
        status.setName(request.name());
        status.setPosition(request.position());
        status.setColor(request.color());
        Status updated=repository.save(status);
        return StatusMapper.toResponse(updated);
    }

    public void delete(Long id){
        if(!repository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"status not found");
        }
        repository.deleteById(id);
    }
}
