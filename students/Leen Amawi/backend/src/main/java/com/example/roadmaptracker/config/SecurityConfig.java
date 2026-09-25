package com.example.roadmaptracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.roadmaptracker.security.JwtAuthFilter;
import com.example.roadmaptracker.service.JwtService;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
public class SecurityConfig {
private final JwtService jwtService;
public SecurityConfig(JwtService jwtService) {
this.jwtService = jwtService;}

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
     JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(jwtService);
        http.csrf(csrf -> csrf.disable()).sessionManagement(session ->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .exceptionHandling(exception ->exception.authenticationEntryPoint((request, response, authException) ->response
        .sendError(HttpServletResponse.SC_UNAUTHORIZED))).authorizeHttpRequests(auth ->auth.requestMatchers("/api/auth/**").permitAll().anyRequest().authenticated())
        .addFilterBefore(jwtAuthFilter,UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}