package com.ZkitiDev.Elearning.controllers;

import com.ZkitiDev.Elearning.models.Admin;
import com.ZkitiDev.Elearning.payload.request.SignupRequest;
import com.ZkitiDev.Elearning.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/admin/signup")
    public ResponseEntity<MessageResponse> registerAdmin(@Valid @RequestBody SignupRequest signupRequest) {
        Admin admin = new Admin();

        admin.setFirstname(signupRequest.getFirstname());
        admin.setLastname(signupRequest.getLastname());
        admin.setEmail(signupRequest.getEmail());
        admin.setUsernme(signupRequest.getUsername());
        admin.setPassword(signupRequest.getPassword());


        return ResponseEntity.ok(new MessageResponse("ok"));
    }

    @GetMapping("/admin/tset")
    public ResponseEntity<MessageResponse> msg(){
        return ResponseEntity.ok(new MessageResponse("ok"));
    }
}
