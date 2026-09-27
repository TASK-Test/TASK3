package com.example.tasktracker.dto.authdtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
    @NotBlank (message = "user name cant be empty")
    String username,
    @Email (message = "email is not valid")
    @NotBlank (message = "email cant be empty")
    String email,
    @NotBlank (message = "password cant be empty")
    String password,
    String displayName
) {
}
