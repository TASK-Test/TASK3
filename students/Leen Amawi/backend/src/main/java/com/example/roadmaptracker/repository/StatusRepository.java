package com.example.roadmaptracker.repository;
import com.example.roadmaptracker.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status, Long> {
}
