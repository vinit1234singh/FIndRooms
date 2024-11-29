package com.findrooms.model;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Room_Booking")
public class BookRoom {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use IDENTITY or SEQUENCE for Oracle
    private Integer id;

    private String name; //Customer Name
    private Long phone;
    private String street;
    private String state;
    private Integer pincode;
    
    private Date bookingDate;
    private String bedtype;
//    private String gender;
//    private double amount;

    @Column(name = "email") // Ensure this matches your database schema
    private String email; // Add this field if you want to use findByEmail
}