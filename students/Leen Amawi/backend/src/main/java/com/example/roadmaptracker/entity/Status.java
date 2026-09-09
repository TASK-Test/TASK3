package com.example.roadmaptracker.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "status")
public class Status {
    public Status(){
    }
    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private int position;

    private String color;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
