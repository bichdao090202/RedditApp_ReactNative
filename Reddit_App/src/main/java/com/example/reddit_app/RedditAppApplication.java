package com.example.reddit_app;

import com.example.reddit_app.entities.*;
import com.example.reddit_app.services.CommunityService;
import com.example.reddit_app.services.PostService;
import com.example.reddit_app.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.util.ArrayList;

@SpringBootApplication
public class RedditAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedditAppApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserService service, CommunityService communityService, PostService postService, UserService userService) {
//        User user = new User("User 2", "VN","user@gmail.com", "123", new ArrayList<>());
//        service.addUser(user);
//        Community community = new Community("Minecraft", "info", "url", new ArrayList<Post>(), new ArrayList<User>());
//        communityService.addCommunity(community);
//        User user = new User("Pham Nhat", "abc", "nhat@gmail.com", "123", new ArrayList<Community>());
//        Post post = new VideoPost("Video Post 1",
//                LocalDateTime.now(), user, new ArrayList<>(), new Community(), "url"
//        );
//        userService.addUser(user);
//        postService.createPost(post);
        return null;
    }
}
