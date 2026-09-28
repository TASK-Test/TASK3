package com.example.roadmaptracker.config;

import com.example.roadmaptracker.entity.Role;
import com.example.roadmaptracker.entity.Status;
import com.example.roadmaptracker.entity.User;
import com.example.roadmaptracker.repository.StatusRepository;
import com.example.roadmaptracker.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedData(StatusRepository statusRepository,UserRepository userRepository,PasswordEncoder passwordEncoder) {

        return args -> {

            if (!statusRepository.existsByName("Backlog")) {
                Status status = new Status();
                status.setName("Backlog");
                status.setPosition(1);
                status.setColor("#6B7280");
                statusRepository.save(status);
            }

            if (!statusRepository.existsByName("In Progress")) {
                Status status = new Status();
                status.setName("In Progress");
                status.setPosition(2);
                status.setColor("#3B82F6");
                statusRepository.save(status);
            }

            if (!statusRepository.existsByName("Done")) {
                Status status = new Status();
                status.setName("Done");
                status.setPosition(3);
                status.setColor("#22C55E");
                statusRepository.save(status);
            }

            if (!userRepository.existsByUsername("demo")) {
                User user = new User();

                user.setUsername("demo");
                user.setEmail("demo@example.com");
                user.setDisplayName("Demo User");
                user.setPasswordHash(passwordEncoder.encode("demo123"));
                user.setRole(Role.USER);
                user.setCreatedAt(Instant.now());

                userRepository.save(user);
            }
        };
    }
}