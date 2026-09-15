package com.example.roadmaptracker.dto;
import com.example.roadmaptracker.entity.Priority;
import java.time.Instant;
import java.time.LocalDate;

public record TaskResponse(
        Long id,
        String title,
        String description,
        Long statusId,
        Priority priority,
        LocalDate targetDate,
        Long createdById,
        Instant createdAt,
        Instant updatedAt
) {}