package com.socialmedia.server.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@Data
public class UserDTO {
    private String name;
    private String username;
    private String email;
    private String password;
    private MultipartFile imageFile;
}


class Solution {
    public boolean containsDuplicate(int[] nums) {
        if (nums.length < 2) return false;

        Map<Integer, Integer> map = new HashMap<>();

        for (Integer i : nums) {
            if (map.containsKey(i)) return true;
            map.put(i,1);
        }

        return false;
    }
}