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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public ResponseEntity<Formateur> getFormateurByid(@PathVariable(value = "id")String id) throws ResourceNotFoundException{
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

    @PutMapping(value = "/{id}")
    public ResponseEntity<Formateur> editFormateur(@PathVariable(value = "id")String formateurId,@Valid @RequestBody Formateur formateurDetails) throws ResourceNotFoundException{
        Formateur formateur = formateurServImpl.findById(formateurId)
                                                .orElseThrow(()-> new ResourceNotFoundException("Could not found formateur with id : "+ formateurId.toString()));

        formateur.setFirstname(formateurDetails.getFirstname());
        formateur.setLastname(formateurDetails.getLastname());
        formateur.setUsername(formateurDetails.getUsername());
        formateur.setEmail(formateurDetails.getEmail());
        formateur.setPhone(formateurDetails.getPhone());
        formateur.setPassword(formateurDetails.getPassword());

        final Formateur updateFormateur = formateurServImpl.updateFormateur(formateur)
                                                        .orElseThrow(()-> new ResourceNotFoundException("Could not update "+ formateurDetails.toString()));
                                                        
        return new ResponseEntity<Formateur>(updateFormateur, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<HttpStatus> deleteFormateur(@PathVariable(value = "id")String id) {
        try {
            formateurServImpl.deletById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
