package com.example.roadmaptracker;
import com.example.roadmaptracker.entity.User;
import com.example.roadmaptracker.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RoadmapTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(RoadmapTrackerApplication.class, args);
    }
    @Bean
    CommandLineRunner run(UserRepository userRepository) {
        return args -> {
            User user = userRepository.save(new User(1,"Leen"));
            System.out.println("Saved user: " + user.getId() + " - " + user.getName());
        };
    }
}
