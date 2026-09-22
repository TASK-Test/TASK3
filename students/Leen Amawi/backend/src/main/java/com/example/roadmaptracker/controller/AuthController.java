package com.example.roadmaptracker.controller;
import com.example.roadmaptracker.dto.RegisterRequest;
import com.example.roadmaptracker.dto.RegisterResponse;
import com.example.roadmaptracker.entity.Role;
import com.example.roadmaptracker.entity.User;
import com.example.roadmaptracker.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public RegisterResponse register(@Valid @RequestBody RegisterRequest request) {

        if (userRepository.existsByUsername(request.username())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already exists");
        }

        if (userRepository.existsByEmail(request.email())) {
             throw new ResponseStatusException(HttpStatus.CONFLICT,"Email already exists");
        }

        User user = new User();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setDisplayName(request.displayName());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.setRole(Role.USER);
        user.setCreatedAt(Instant.now());
        User savedUser = userRepository.save(user);
        return new RegisterResponse(savedUser.getId(),savedUser.getUsername(),savedUser.getEmail(),savedUser.getDisplayName(),savedUser.getRole());
    }
}