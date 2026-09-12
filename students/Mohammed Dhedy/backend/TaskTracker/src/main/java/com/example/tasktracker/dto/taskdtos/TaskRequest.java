package com.example.tasktracker.dto.taskdtos;

import java.time.LocalDate;

import com.example.tasktracker.entity.Priority;

public record TaskRequest(
    String title,
    String description,
    Long statusId,
    Priority priority,
    LocalDate targetDate,
    Long createdById
) {}