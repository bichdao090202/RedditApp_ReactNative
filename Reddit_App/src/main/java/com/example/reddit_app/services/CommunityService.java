package com.example.reddit_app.services;

import com.example.reddit_app.dtos.CommunityResponseDto;
import com.example.reddit_app.dtos.CreateCommunityRequestDto;
import com.example.reddit_app.entities.Community;
import com.example.reddit_app.entities.Post;
import com.example.reddit_app.entities.User;
import com.example.reddit_app.repositories.CommunityRepository;
import com.example.reddit_app.repositories.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommunityService {

    private String defaultCommunityImageUrl = "https://firebasestorage.googleapis.com/v0/b/marine-lodge-308314.appspot.com/o/images%2Freddit-logo.png?alt=media&token=6477be27-5745-4d2f-ad27-d639eaac56b5";

    @Autowired
    private CommunityRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Community> getAllCommunity() {
        return repository.findAll();
    }

    public Community getCommunityById(ObjectId id) {
        return mongoTemplate.findById(id, Community.class);
    }

    public String addMember(ObjectId communityId, User user) {
        Query query = new Query(Criteria.where("id").is(communityId));
        Update update = new Update().addToSet("memberList", user.getId());
        mongoTemplate.upsert(query, update, Community.class);

        query = new Query(Criteria.where("id").is(user.getId()));
        update = new Update().addToSet("joinedCommunity", communityId);
        mongoTemplate.upsert(query, update, User.class);

        return "added.";
    }

    public Community addCommunity(CreateCommunityRequestDto dto) {
        User user = new User(dto.getUserId());
//        System.out.println(dto.getUserId());
        List<User> userList = new ArrayList<>();
        userList.add(user);
        Community community = new Community(new ObjectId().toHexString(),
                dto.getName(), dto.getDescription(), defaultCommunityImageUrl,
                new ArrayList<Post>(), userList
                );
        Query query = new Query(Criteria.where("id").is(dto.getUserId()));
        Update update = new Update().addToSet("joinedCommunity", community);
        mongoTemplate.upsert(query, update, User.class);
        return repository.insert(community);
    }

    public List<CommunityResponseDto> getUserCommunites(String userId) {
        Optional<User> user = userRepository.findById(new ObjectId(userId));
        List<CommunityResponseDto> communityDtoList = new ArrayList<>();
        for (Community community : user.get().getJoinedCommunity()) {
            CommunityResponseDto dto = new CommunityResponseDto(community.getId(), community.getName(), community.getImageUrl());
            communityDtoList.add(dto);
        }
        return communityDtoList;
    }
}
