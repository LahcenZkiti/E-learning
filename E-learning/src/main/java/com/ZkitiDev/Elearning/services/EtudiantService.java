package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Etudiant;

public interface EtudiantService {

    Optional<List<Etudiant>> findAll();
    
    Optional <Etudiant> findById(String id);

    Optional <Etudiant> findByUsername(String username);

    Optional <Etudiant> findByEmail(String email);

    public Optional <Etudiant> save(Etudiant etudiant);
    
    public Optional <Etudiant> updateEtudiant(Etudiant etudiant);
     
    void deleteById(String id);

    public void deleteAll();
}
