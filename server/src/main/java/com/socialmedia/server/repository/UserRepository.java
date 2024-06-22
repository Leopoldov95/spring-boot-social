package com.socialmedia.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialmedia.server.entity.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends JpaRepository<User, Integer> {

    //List<User> findByLastName(String lastName);

    User findById(long id);

    User findByEmail(String email);

    User findByUserName(String userName);

    Boolean existsByEmail(String email);

    Boolean existsByUserName(String username);

}