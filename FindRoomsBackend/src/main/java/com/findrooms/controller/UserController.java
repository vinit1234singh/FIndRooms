/**
 * 
 */
package com.findrooms.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.findrooms.model.User;
import com.findrooms.service.UserService;

/**
 * @author vinit.singh
 *
 */

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		return new ResponseEntity<>(userService.createUser(user),HttpStatus.CREATED);
	}
	
	@GetMapping("/getemail/{email}")
	public ResponseEntity<Optional<User>> findUserByEmail(@PathVariable String email) {
		return new ResponseEntity<>(userService.getByEmail(email),HttpStatus.OK);
	}
	
	

}
