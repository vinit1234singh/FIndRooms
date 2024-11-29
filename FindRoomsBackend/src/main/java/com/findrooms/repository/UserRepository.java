/**
 * 
 */
package com.findrooms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.findrooms.model.User;

/**
 * @author vinit.singh
 *
 */
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmail(String email);
	
}
