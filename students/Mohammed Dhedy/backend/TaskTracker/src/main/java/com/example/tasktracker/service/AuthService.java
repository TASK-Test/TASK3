package com.example.tasktracker.service;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.tasktracker.dto.authdtos.RegisterRequest;
import com.example.tasktracker.dto.authdtos.TokenResponse;
import com.example.tasktracker.entity.User;
import com.example.tasktracker.dto.authdtos.UserResponse;
import com.example.tasktracker.dto.authdtos.AuthMapper;
import com.example.tasktracker.dto.authdtos.LoginRequest;
import com.example.tasktracker.repository.UserRepository;
import com.example.tasktracker.security.JwtService;

@Service
public class AuthService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(UserRepository repository, PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager, JwtService jwtService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public UserResponse register(RegisterRequest request) {
        if (repository.existsByUsername(request.username())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "username already exists");
        }
        if (repository.existsByEmail(request.email())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "email already exists");
        }
        String passwordHash = passwordEncoder.encode(request.password());
        User user = AuthMapper.toEntity(request, passwordHash);
        User savedUser = repository.save(user);
        return AuthMapper.toResponse(savedUser);
    }

    public TokenResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.username(), request.password()));
        String token = jwtService.generateToken(authentication.getName());
        return new TokenResponse(token);
    }
}
