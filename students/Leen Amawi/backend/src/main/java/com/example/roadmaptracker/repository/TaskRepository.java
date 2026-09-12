package com.example.roadmaptracker.repository;
import com.example.roadmaptracker.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
