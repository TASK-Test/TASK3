package com.example.roadmaptracker.mapper;
import com.example.roadmaptracker.dto.StatusRequest;
import com.example.roadmaptracker.dto.StatusResponse;
import com.example.roadmaptracker.entity.Status;

public class StatusMapper {

    public static Status toEntity(StatusRequest request) {
        Status status = new Status();
        status.setName(request.name());
        status.setPosition(request.position());
        status.setColor(request.color());
        return status;
    }

    public static StatusResponse toResponse(Status status) {
        return new StatusResponse(
                status.getId(),
                status.getName(),
                status.getPosition(),
                status.getColor());
    }
}