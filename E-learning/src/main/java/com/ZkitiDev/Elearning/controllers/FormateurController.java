package com.ZkitiDev.Elearning.controllers;

import java.util.List;

import javax.validation.Valid;

import com.ZkitiDev.Elearning.exception.ResourceAlreadyExistsException;
import com.ZkitiDev.Elearning.exception.ResourceNotFoundException;
import com.ZkitiDev.Elearning.models.Formateur;
import com.ZkitiDev.Elearning.services.FormateurServiceImpl;

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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/formateurs")
public class FormateurController {
    @Autowired
    private FormateurServiceImpl formateurServImpl;

    @GetMapping
    public ResponseEntity<List<Formateur>> getAllFormateurs() throws ResourceNotFoundException{
        List<Formateur> list = formateurServImpl.findAll()
                                                .orElseThrow(()-> new ResourceNotFoundException("No formateur found"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Formateur> getFormateurByid(@PathVariable("id")String id) throws ResourceNotFoundException{
        Formateur formateur = formateurServImpl.findById(id)
                                                .orElseThrow(()-> new ResourceNotFoundException("Could not found formateur with id : "+ id.toString()));
        return new ResponseEntity<Formateur>(formateur, HttpStatus.OK);
        }

    @PostMapping
    public ResponseEntity<Formateur> addFormateur(@Valid @RequestBody Formateur formateur) throws ResourceAlreadyExistsException{
        Formateur result = formateurServImpl.saveFormateur(formateur)
                                            .orElseThrow(()-> new ResourceAlreadyExistsException("Coulde not create "+ formateur.toString()));
        return new ResponseEntity<Formateur>(result, HttpStatus.CREATED);
    }
}
