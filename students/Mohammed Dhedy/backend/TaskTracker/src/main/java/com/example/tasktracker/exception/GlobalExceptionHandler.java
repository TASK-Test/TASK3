package com.example.tasktracker.exception;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception,HttpServletRequest request){
        int status=exception.getStatusCode().value();
        Map<String,String> fieldErrors=new HashMap<>();
        for(FieldError fieldError:exception.getBindingResult().getFieldErrors()){
            fieldErrors.putIfAbsent(fieldError.getField(),fieldError.getDefaultMessage());
        }
        ApiErrorResponse response=new ApiErrorResponse(
            Instant.now(),
            status,
            exception.getBody().getTitle(),
            exception.getBody().getDetail(),
            request.getRequestURI(),
            fieldErrors
        );
        return ResponseEntity.status(status).body(response);
    }
    
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ApiErrorResponse> handleResponseStatusException(ResponseStatusException exception,HttpServletRequest request){
        int status =exception.getStatusCode().value();
        ApiErrorResponse response=new ApiErrorResponse(
            Instant.now(),
            status,
            exception.getBody().getTitle(),
            exception.getBody().getDetail(),
            request.getRequestURI(),
            null
        );
        return ResponseEntity.status(status).body(response);
    }
}
