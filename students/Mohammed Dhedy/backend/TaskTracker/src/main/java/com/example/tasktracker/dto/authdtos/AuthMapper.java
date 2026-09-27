package com.example.tasktracker.dto.authdtos;

import java.time.Instant;

import com.example.tasktracker.entity.Role;
import com.example.tasktracker.entity.User;

public class AuthMapper {
    public static User toEntity(RegisterRequest request, String passwordHash) {
        User user = new User();
        user.setCreatedAt(Instant.now());
        String displayName = request.displayName() == null || request.displayName().isBlank() ? request.username()
                : request.displayName();
        user.setDisplayName(displayName);
        user.setEmail(request.email());
        user.setPasswordHash(passwordHash);
        user.setUsername(request.username());
        user.setRole(Role.USER);
        return user;
    }

    public static UserResponse toResponse(User user) {
        return new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getDisplayName(),
                user.getRole());
    }
}
