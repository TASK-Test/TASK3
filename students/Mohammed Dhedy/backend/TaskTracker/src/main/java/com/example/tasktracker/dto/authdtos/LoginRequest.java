package com.example.tasktracker.dto.authdtos;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
    @NotBlank(message = "user name cant be empty")
    String username,
    @NotBlank(message = "password cant be empty")
    String password
) {
    
}
