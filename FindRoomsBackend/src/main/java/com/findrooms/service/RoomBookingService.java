/**
 * 
 */
package com.findrooms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.findrooms.model.BookRoom;
import com.findrooms.repository.RoomBookingRepository;

/**
 * @author vinit.singh
 *
 */

@Service
public class RoomBookingService {
	
	@Autowired
	RoomBookingRepository roomBookingRepository;
	
	public BookRoom roomBook(BookRoom bookRoom) {
		return roomBookingRepository.save(bookRoom);
	}
	
	public Optional<BookRoom> findByemail(String email) {
		return Optional.ofNullable(roomBookingRepository.findByEmail(email));
	}
	
	public List<BookRoom> getAllBooking() {
		return roomBookingRepository.findAll();
		
	}
}
