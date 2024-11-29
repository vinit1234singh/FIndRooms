/**
 * 
 */
package com.findrooms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.findrooms.model.User;
import com.findrooms.repository.UserRepository;

/**
 * @author vinit.singh
 *
 */

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getAllUser(){
		return userRepository.findAll();
	}
	
	public Optional<User> getByEmail(String email){
		return Optional.ofNullable(userRepository.findByEmail(email));
	}

}
