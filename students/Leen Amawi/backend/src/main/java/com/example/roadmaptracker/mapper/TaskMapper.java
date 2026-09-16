package com.example.roadmaptracker.mapper;

import com.example.roadmaptracker.dto.TaskResponse;
import com.example.roadmaptracker.entity.Task;

public class TaskMapper {

    public static TaskResponse toResponse(Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getStatus().getId(),
                task.getPriority(),
                task.getTargetDate(),
                task.getCreatedBy().getId(),
                task.getCreatedAt(),
                task.getUpdatedAt()
        );
    }
}