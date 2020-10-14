package com.ZkitiDev.Elearning.controllers;

import com.ZkitiDev.Elearning.exception.ResourceAlreadyExistsException;
import com.ZkitiDev.Elearning.exception.ResourceNotFoundException;
import com.ZkitiDev.Elearning.models.Etudiant;
import com.ZkitiDev.Elearning.services.EtudiantServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {

    @Autowired
    private EtudiantServiceImpl etudSerImpl;

    @GetMapping()
    public ResponseEntity<List<Etudiant>> getAllEtudiants() throws ResourceNotFoundException {
        List<Etudiant> list =   etudSerImpl.findAll()
                                            .orElseThrow( ()-> new ResourceNotFoundException("Etudiant not found"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable(value = "id")String  etudiantId)throws ResourceNotFoundException {
        Etudiant etudiant = etudSerImpl.findById(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id :: "+etudiantId));
        return ResponseEntity.ok().body(etudiant);
    }

    @PostMapping()
    public ResponseEntity<Etudiant> createEtudiant(@Valid @RequestBody Etudiant etudiant) throws ResourceAlreadyExistsException {
       Etudiant result = etudSerImpl.save(etudiant)
                                .orElseThrow( ()-> new ResourceAlreadyExistsException("Could not create "+ etudiant.toString()));
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable(value = "id")String  etudiantId,@Valid @RequestBody Etudiant etudiantDetails)throws ResourceNotFoundException{
        Etudiant etudiant = etudSerImpl.findById(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id ::  " + etudiantId));

        etudiant.setFirstname(etudiantDetails.getFirstname());
        etudiant.setLastname(etudiantDetails.getLastname());
        etudiant.setEmail(etudiantDetails.getEmail());
        etudiant.setAge(etudiantDetails.getAge());
        etudiant.setPhone(etudiantDetails.getPhone());
        etudiant.setUsername(etudiantDetails.getUsername());
        etudiant.setPassword(etudiantDetails.getPassword());

        final Etudiant updatedEtudiant = etudSerImpl.updateEtudiant(etudiant)
                                                    .orElseThrow(()-> new ResourceNotFoundException("Could not update " + etudiantDetails.toString()));

        return new ResponseEntity<Etudiant>(updatedEtudiant, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<HttpStatus> deleteEtudiant(@PathVariable("id")String etudiantId) {
        try {
            etudSerImpl.deleteById(etudiantId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
