package com.socialmedia.server.services;

import com.cloudinary.Cloudinary;
import com.socialmedia.server.dto.UserDTO;
import com.socialmedia.server.entity.User;
import com.socialmedia.server.exception.UserAlreadyExistsException;
import com.socialmedia.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

// UserService.java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void addUser(UserDTO createUserRequest) throws UserAlreadyExistsException, IOException {
        // Check if user exists for email
        if (userRepository.existsByEmail(createUserRequest.getEmail())) {
            throw new UserAlreadyExistsException("Email already exists");
        }

        // Check if user exists for username
        if (userRepository.existsByUserName(createUserRequest.getUsername())) {
            throw new UserAlreadyExistsException("Username already exists");
        }

        String profileImageURL = null;
        MultipartFile imageFile = createUserRequest.getImageFile();

        if (imageFile != null && !imageFile.isEmpty()) {
            // Write the image to cloudinary
            Map<String, String> params = Map.of(
                    "folder", "profile",
                    "quality", "q_auto:eco"
            );
            Map uploadResult = cloudinary.uploader().upload(imageFile.getBytes(), params);
            profileImageURL = (String) uploadResult.get("url");
        }

        User user = new User();
        user.setName(createUserRequest.getName());
        user.setUserName(createUserRequest.getUsername());
        user.setEmail(createUserRequest.getEmail());
        user.setProfilePicture(profileImageURL);
        String encryptedPassword = passwordEncoder.encode(createUserRequest.getPassword());
        user.setPassword(encryptedPassword);

        userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}