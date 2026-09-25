package com.example.roadmaptracker.dto;
import com.example.roadmaptracker.entity.Role;

public record RegisterResponse(Long id, String username, String email,String displayName,  Role role) 
{
    
}