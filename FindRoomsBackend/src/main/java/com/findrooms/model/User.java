package com.findrooms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "User1_Table")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Change to IDENTITY or SEQUENCE as needed
    private Integer id;

    private String name;

    @Column(nullable = false, unique = true, name = "email")
    private String email;

    private String address;
    private String state;
    private String country;
    private Integer pincode;
    private Integer age;
    private Integer mobile_number;
    private String password;
}