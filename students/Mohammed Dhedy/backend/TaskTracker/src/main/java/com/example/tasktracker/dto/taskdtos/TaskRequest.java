package com.example.tasktracker.dto.taskdtos;

import java.time.LocalDate;

import com.example.tasktracker.entity.Priority;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TaskRequest(
    @NotBlank(message = "Title cannot be blank")
    String title,
    String description,
    Long statusId,
    Priority priority,
    @NotNull(message = "Target date is required")
    LocalDate targetDate,
    Long createdById
) {}