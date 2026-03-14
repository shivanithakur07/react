package com.example.jwt_auth.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/login")
    public Map<String,String> login(@RequestBody Map<String,String> user){

        String username = user.get("username");
        String password = user.get("password");

        if(username.equals("user123") && password.equals("password123")){
            Map<String,String> response = new HashMap<>();
            response.put("token","sample_jwt_token_123");
            return response;
        }

        throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/protected")
    public String protectedRoute(){
        return "Access Granted to Protected Route";
    }
}