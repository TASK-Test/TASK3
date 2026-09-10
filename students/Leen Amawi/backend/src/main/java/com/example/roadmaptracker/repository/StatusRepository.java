package com.example.roadmaptracker.repository;
import com.example.roadmaptracker.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatusRepository extends JpaRepository<Status, Long> {
    List<Status> findAllByOrderByPositionAsc();
    boolean existsByName(String name);


}
