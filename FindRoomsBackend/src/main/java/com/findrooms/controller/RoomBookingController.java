/**
 * 
 */
package com.findrooms.controller;

import java.util.List;
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

import com.findrooms.model.BookRoom;
import com.findrooms.service.RoomBookingService;

/**
 * @author vinit.singh
 *
 */

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/room")
public class RoomBookingController {
	
	@Autowired
	RoomBookingService roomBookingService;
	
	@PostMapping("/booking")
	public ResponseEntity<BookRoom> bookingRoom(@RequestBody BookRoom bookRoom){
		return new ResponseEntity<>(roomBookingService.roomBook(bookRoom),HttpStatus.CREATED);
	}
	
	@GetMapping("/allroom")
	public ResponseEntity<List<BookRoom>> getallRoom(){
		return new ResponseEntity<>(roomBookingService.getAllBooking(),HttpStatus.OK);
	}
	
	@GetMapping("/customer/{email}")
	public ResponseEntity<Optional<BookRoom>> getBookingByEmail(@PathVariable String email){
		return new ResponseEntity<>(roomBookingService.findByemail(email),HttpStatus.OK);
	}
	

}
