package com.example.roadmaptracker.controller;
import com.example.roadmaptracker.dto.LoginRequest;
import com.example.roadmaptracker.dto.LoginResponse;
import com.example.roadmaptracker.dto.RegisterRequest;
import com.example.roadmaptracker.dto.RegisterResponse;
import com.example.roadmaptracker.entity.Role;
import com.example.roadmaptracker.entity.User;
import com.example.roadmaptracker.repository.UserRepository;
import com.example.roadmaptracker.service.JwtService;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UserRepository userRepository,PasswordEncoder passwordEncoder,JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;

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
    @PostMapping("/login")
public LoginResponse login(@Valid @RequestBody LoginRequest request) {

    User user = userRepository.findByUsername(request.username()).orElseThrow(() ->new BadCredentialsException("Invalid username or password"));

    if (!passwordEncoder.matches(request.password(),user.getPasswordHash())) {
        throw new BadCredentialsException("Invalid username or password");
    }
    String token = jwtService.generateToken(user.getUsername());
    return new LoginResponse(token);
}
}