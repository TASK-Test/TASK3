package com.example.tasktracker.dto.statusdtos;
import com.example.tasktracker.entity.Status;

public class StatusMapper{
    public static StatusResponse toResponse(Status status){
        return new StatusResponse(status.getId(),status.getName(),status.getPosition(),status.getColor());
    }

    public static Status toStatus(StatusRequest request){
        Status status=new Status();
        status.setName(request.name());
        status.setPosition(request.position());
        status.setColor(request.color());
        return status;
    }
}