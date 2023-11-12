package com.example.reddit_app.controllers;

import com.example.reddit_app.dtos.AddUserDto;
import com.example.reddit_app.dtos.CommunityResponseDto;
import com.example.reddit_app.dtos.CreateCommunityRequestDto;
import com.example.reddit_app.dtos.Id;
import com.example.reddit_app.entities.Community;
import com.example.reddit_app.services.CommunityService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/communities")
public class CommunityController {

    @Autowired
    private CommunityService service;

    @GetMapping
    public ResponseEntity<List<Community>> allCommunity() {
        return new ResponseEntity<List<Community>>(service.getAllCommunity(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Community> getCommunityById(@RequestParam("id") ObjectId id) {
        return new ResponseEntity<Community>(service.getCommunityById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Community> createCommunity(@RequestBody CreateCommunityRequestDto dto) {
        return new ResponseEntity<Community>(service.addCommunity(dto), HttpStatus.OK);
    }

    @PostMapping("/add-member")
    public ResponseEntity<String> addMember(@RequestBody AddUserDto data) {
        System.out.println(data.getId());
        System.out.println(data.getUser());
        return new ResponseEntity<String>(service.addMember(data.getId(), data.getUser()), HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<List<CommunityResponseDto>> getUserCommunities(@RequestBody Id userId) {
//        System.out.println(userId.getId());
        return new ResponseEntity<>(service.getUserCommunites(userId.getId()), HttpStatus.OK);
    }
}
