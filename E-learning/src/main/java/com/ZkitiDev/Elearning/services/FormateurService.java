package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Formateur;

public interface FormateurService {

    Optional<List<Formateur>> findAll();

    Optional<Formateur> findById(String id);

    Optional<Formateur> findByUsername(String username);

    Optional<Formateur> findByEmail(String email);

    public Optional<Formateur> saveFormateur(Formateur formateur);
    
    public Optional<Formateur> updateFormateur(Formateur formateur);

    public void deleteAll();

    void deletById(String id);
}
