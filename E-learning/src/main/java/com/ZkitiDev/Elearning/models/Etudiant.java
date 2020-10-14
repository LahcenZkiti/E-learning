package com.ZkitiDev.Elearning.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;


@Entity
public class Etudiant {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;
    @NotBlank(message = "Firstname cannot be empty or null")
    @Size(min = 3, max = 20)
    private String firstname;
    @NotBlank(message = "Lastname cannot be empty or null")
    @Size(min = 3, max = 20)
    private String lastname;
    @Email
    @NotBlank(message = "Email cannot be empty or null")
    private String email;

    private int age;
    @NotBlank(message = "Phone cannot be empty or null")
    private String phone;
    @Size(min = 3, max = 25)
    private String username;
    @Size(min = 6, max = 120)
    private String password;

    public Etudiant(String id, @NotBlank(message = "Firstname cannot be empty or null")
                               @Size(min = 3, max = 20) String firstname,
                               @NotBlank(message = "Lastname cannot be empty or null")
                               @Size(min = 3, max = 20) String lastname,
                               @Email @NotBlank(message = "Email cannot be empty or null") String email,
                               @NotBlank int age, @NotBlank(message = "Phone cannot be empty or null") String phone,
                               @Size(min = 3, max = 25) String username,
                               @Size(min = 6, max = 120) String password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }

    public Etudiant() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
