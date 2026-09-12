package com.example.tasktracker.dto.taskdtos;

import java.time.Instant;
import java.time.LocalDate;

import com.example.tasktracker.dto.statusdtos.StatusResponse;
import com.example.tasktracker.entity.Priority;

public record TaskResponse(
    Long id,
    String title,
    String description,
    StatusResponse status,
    Priority priority,
    LocalDate targetDate,
    Long createdById,
    Instant createdAt,
    Instant updatedAt
) {}