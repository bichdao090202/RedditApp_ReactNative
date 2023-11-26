package com.example.reddit_app;

import com.example.reddit_app.entities.*;
import com.example.reddit_app.services.CommunityService;
import com.example.reddit_app.services.PostService;
import com.example.reddit_app.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.TreeSet;

@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:8081")
public class RedditAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedditAppApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserService service, CommunityService communityService, PostService postService, UserService userService) {
//        System.out.println(communityService.getCommunityById("654e49b10f0bfa17ff780847"));
        return null;
    }
}
