package com.example.tasktracker.dto.taskdtos;

import java.time.Instant;

import com.example.tasktracker.dto.statusdtos.StatusMapper;
import com.example.tasktracker.entity.Status;
import com.example.tasktracker.entity.Task;
import com.example.tasktracker.entity.User;

public class TaskMapper{
    public static TaskResponse toResponse(Task task){
        return new TaskResponse(
            task.getId(),
            task.getTitle(),
            task.getDescription(),
            StatusMapper.toResponse(task.getStatus()),
            task.getPriority(),
            task.getTargetDate(),
            task.getCreatedBy().getId(),
            task.getCreatedAt(),
            task.getUpdatedAt()
        );
    }

    public static Task toTask(TaskRequest request,Status status, User user){
        Task task = new Task();
        task.setTitle(request.title());
        task.setDescription(request.description());
        task.setPriority(request.priority());
        task.setStatus(status);
        task.setCreatedBy(user);
        task.setTargetDate(request.targetDate());
        task.setCreatedAt(Instant.now());
        task.setUpdatedAt(null);
        return task;
    }
}