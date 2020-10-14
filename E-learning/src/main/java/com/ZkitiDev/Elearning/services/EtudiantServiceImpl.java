package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Etudiant;
import com.ZkitiDev.Elearning.repositories.EtudiantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EtudiantServiceImpl implements EtudiantService {

    @Autowired
    private EtudiantRepository etudiantrepository;

    @Override
    public Optional<List<Etudiant>> findAll() {
        // TODO Auto-generated method stub
        return Optional.of(etudiantrepository.findAll());
    }

    @Override
    public Optional<Etudiant> findById(String id) {
        // TODO Auto-generated method stub
        return etudiantrepository.findById(id);
    }

    @Override
    public Optional<Etudiant> findByUsername(String username) {
        // TODO Auto-generated method stub
        return etudiantrepository.findByUsername(username);
    }

    @Override
    public Optional<Etudiant> findByEmail(String email) {
        // TODO Auto-generated method stub
        return etudiantrepository.findByEmail(email);
    }

    @Override
    public Optional<Etudiant> save(Etudiant etudiant) {
        // TODO Auto-generated method stub
        return Optional.of(etudiantrepository.save(etudiant));
    }

    @Override
    public Optional<Etudiant> updateEtudiant(Etudiant etudiant) {
        // TODO Auto-generated method stub
        return Optional.of(etudiantrepository.save(etudiant));
    }

    @Override
    public void deleteById(String id) {
        // TODO Auto-generated method stub
        etudiantrepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        etudiantrepository.deleteAll();
    }
    
}
