package com.example.roadmaptracker.dto;

import com.example.roadmaptracker.entity.Priority;

import java.time.LocalDate;

public record TaskRequest(
        String title,
        String description,
        Long statusId,
        Priority priority,
        LocalDate targetDate
) {}