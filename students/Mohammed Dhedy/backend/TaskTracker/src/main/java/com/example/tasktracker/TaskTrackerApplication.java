package com.example.tasktracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.example.tasktracker.entity.User;
import com.example.tasktracker.repository.UserRepository;

@SpringBootApplication
public class TaskTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskTrackerApplication.class, args);
	}
@Bean
CommandLineRunner test(UserRepository repository){
	return args->{
		User user=new User();
		user.setName("mohammed");
		repository.save(user);
		System.out.println("user is : " +user.getId() + " "+ user.getName());
	};
}
}
