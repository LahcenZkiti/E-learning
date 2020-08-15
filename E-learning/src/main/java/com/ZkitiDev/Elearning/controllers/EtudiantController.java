package com.ZkitiDev.Elearning.controllers;

import com.ZkitiDev.Elearning.exception.ResourceAlreadyExistsException;
import com.ZkitiDev.Elearning.exception.ResourceNotFoundException;
import com.ZkitiDev.Elearning.models.Etudiant;
import com.ZkitiDev.Elearning.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EtudiantController {
    @Autowired
    private EtudiantRepository etudiantRepository;

    @GetMapping("/etudiants")
    public List<Etudiant> getAllEtudiants(){
        return etudiantRepository.findAll();
    }

    @GetMapping("/etudiants/{id}")
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable(value = "id")String  etudiantId)throws ResourceNotFoundException {
        Etudiant etudiant = etudiantRepository.findById(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id :: "+etudiantId));
        return ResponseEntity.ok().body(etudiant);
    }

    @PostMapping("/etudiants")
    public ResponseEntity<Etudiant> createEtudiant(@Valid @RequestBody Etudiant etudiant) {
        try {
            Etudiant newEtudiant = etudiantRepository.save(etudiant);

            return new  ResponseEntity<>(newEtudiant, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/etudiants/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable(value = "id")String  etudiantId,@Valid @RequestBody Etudiant etudiantDetails)throws ResourceNotFoundException{
        Etudiant etudiant = etudiantRepository.findById(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id ::  "+etudiantId));

        etudiant.setFirstname(etudiantDetails.getFirstname());
        etudiant.setLastname(etudiantDetails.getLastname());
        etudiant.setEmail(etudiantDetails.getEmail());
        etudiant.setAge(etudiantDetails.getAge());
        etudiant.setPhone(etudiantDetails.getPhone());
        etudiant.setUsername(etudiantDetails.getUsername());
        etudiant.setPassword(etudiantDetails.getPassword());

        final Etudiant updatedEtudiant = etudiantRepository.save(etudiant);

        return ResponseEntity.ok(updatedEtudiant);
    }

    @DeleteMapping("/etudiants")
    public ResponseEntity<HttpStatus> deleteEtudiant(@PathVariable("id")String etudiantId) {
        try {
            etudiantRepository.deleteById(etudiantId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
