package com.example.tasktracker.dto.authdtos;

import com.example.tasktracker.entity.Role;

public record UserResponse(
    Long id,
    String username,
    String email,
    String displayName,
    Role role
) {
    
}
