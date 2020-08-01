package com.ZkitiDev.Elearning.payload.request;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String firstname;
    @NotBlank
    @Size(min = 3, max = 20)
    private String lastname;
    @Email
    @NotBlank(message = "Email cannot be empty or null")
    private String email;
    @NotBlank
    @Size(min = 3, max = 25)
    private String username;
    @NotBlank
    @Size(min = 6)
    private String password;

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
