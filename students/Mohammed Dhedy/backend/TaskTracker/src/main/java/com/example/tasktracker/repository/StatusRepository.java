package com.example.tasktracker.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.tasktracker.entity.Status;
import java.util.List;
import java.util.Optional;
public interface StatusRepository extends JpaRepository<Status,Long>{
public List<Status> findAllByOrderByPositionAsc();
Optional<Status> findByName(String name);
}
