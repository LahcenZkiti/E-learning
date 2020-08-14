package com.ZkitiDev.Elearning.controllers;

import com.ZkitiDev.Elearning.exception.ResourceNotFoundException;
import com.ZkitiDev.Elearning.models.Etudiant;
import com.ZkitiDev.Elearning.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable(value = "id")Long etudiantId)throws ResourceNotFoundException {
        Etudiant etudiant = etudiantRepository.findByEtudiantId(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id :: "+etudiantId));
        return ResponseEntity.ok().body(etudiant);
    }

    @PostMapping("/etudiants")
    public Etudiant createEtudiant(@Valid @RequestBody Etudiant etudiant){
        return etudiantRepository.save(etudiant);
    }

    @PutMapping("/etudiants/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable(value = "id")Long etudiantId,@Valid @RequestBody Etudiant etudiantDetails)throws ResourceNotFoundException{
        Etudiant etudiant = etudiantRepository.findByEtudiantId(etudiantId)
                .orElseThrow(()-> new ResourceNotFoundException("There is not etudiant with this id ::  "+etudiantId));

        etudiant.setFirstname(etudiantDetails.getFirstname());
        etudiant.setLastname(etudiantDetails.getLastname());
        etudiant.setEmail(etudiantDetails.getEmail());
        etudiant.setAge(etudiantDetails.getAge());
        etudiant.setPhone(etudiantDetails.getPhone());
        etudiant.setUsernme(etudiantDetails.getUsernme());
        etudiant.setPassword(etudiantDetails.getPassword());

        final Etudiant updatedEtudiant = etudiantRepository.save(etudiant);

        return ResponseEntity.ok(updatedEtudiant);
    }
}
