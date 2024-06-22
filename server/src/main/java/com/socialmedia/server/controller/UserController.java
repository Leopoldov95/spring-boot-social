package com.socialmedia.server.controller;

import com.socialmedia.server.dto.UserDTO;
import com.socialmedia.server.entity.User;
import com.socialmedia.server.exception.UserAlreadyExistsException;
import com.socialmedia.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "${client.url}")
@Controller // This means that this class is a Controller
@RequestMapping(path="/users") // This means URL's start with /demo (after Application path)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path="/add")
    public ResponseEntity<?> addNewUser(@RequestBody UserDTO createUserRequest) {
        try {
            userService.addUser(createUserRequest);
            return ResponseEntity.ok("User saved successfully");
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload profile image");
        }
    }

    @GetMapping(path="/all")
    public ResponseEntity<Iterable<User>> getAllUsers() {
        Iterable<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}