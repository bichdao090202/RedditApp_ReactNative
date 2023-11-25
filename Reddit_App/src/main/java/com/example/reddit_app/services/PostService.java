package com.example.reddit_app.services;

import com.example.reddit_app.dtos.Id;
import com.example.reddit_app.dtos.PostCommunityRequestDto;
import com.example.reddit_app.dtos.PostsRequestDto;
import com.example.reddit_app.entities.Community;
import com.example.reddit_app.entities.Post;
import com.example.reddit_app.repositories.CommunityRepository;
import com.example.reddit_app.repositories.PostRepository;
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
public class PostService {
    @Autowired
    private PostRepository repository;

    @Autowired
    private CommunityRepository communityRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Post> getAllPost() {
        return repository.findAll();
    }

    public Post createPost(Post post) {
        repository.insert(post);
        Query query = Query.query(Criteria.where("id").is(post.getCommunity().getId()));
        Update update = new Update().push("postList", post);
        mongoTemplate.updateFirst(query, update, Community.class);
        return post;
    }

    public List<PostCommunityRequestDto> getAllPostInCommunity(Id communityId) {
        List<PostCommunityRequestDto> list = new ArrayList<>();
        List<Post> postList = communityRepository.findById(new ObjectId(communityId.getId())).get().getPostList();
        for(Post post : postList) {
            list.add(new PostCommunityRequestDto(post));
        }
        return  list;
    }

    public Optional<Post> getPostById(ObjectId id) {
        return repository.findById(id);
    }

    public List<PostsRequestDto> getAllPostDto() {
        List<PostsRequestDto> list = new ArrayList<>();
        List<Post> postList = repository.findAll();
        for(Post post : postList) {
            list.add(new PostsRequestDto(post));
        }
        return  list;
    }

//    public Comment createComment(String comment, ObjectId postId, ObjectId userId) {
//        Comment cmt = new Comment(new User(userId), comment, 0);
//        System.out.println(cmt);
//        Query query = Query.query(Criteria.where("id").is(postId));
//        Update update = new Update().push("comments", cmt);
//        mongoTemplate.updateFirst(query, update, Post.class);
//        return cmt;
//    }
}
