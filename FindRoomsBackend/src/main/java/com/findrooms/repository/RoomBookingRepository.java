/**
 * 
 */
package com.findrooms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.findrooms.model.BookRoom;

/**
 * @author vinit.singh
 *
 */
public interface RoomBookingRepository extends JpaRepository<BookRoom, Integer>{
	BookRoom findByEmail(String email);
}
