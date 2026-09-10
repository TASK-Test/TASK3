package com.example.roadmaptracker.repository;
import com.example.roadmaptracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}