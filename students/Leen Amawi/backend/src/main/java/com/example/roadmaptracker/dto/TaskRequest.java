package com.example.roadmaptracker.dto;

import com.example.roadmaptracker.entity.Priority;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record TaskRequest(
 @NotBlank(message = "Title is required")
 String title,
String description,
@NotNull(message = "Status is required")
Long statusId,
@NotNull(message = "Priority is required")
Priority priority,
@NotNull(message = "Target date is required")
LocalDate targetDate
) {}