package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Formateur;
import com.ZkitiDev.Elearning.repositories.FormateurRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormateurServiceImpl implements FormateurService {

    @Autowired
    private FormateurRepository formateurRepository;

    @Override
    public Optional<List<Formateur>> findAll() {
        return Optional.of(formateurRepository.findAll());
    }

    @Override
    public Optional<Formateur> findById(String id) {
        return formateurRepository.findById(id);
    }

    @Override
    public Optional<Formateur> findByUsername(String username) {
        return formateurRepository.findByUsername(username);
    }

    @Override
    public Optional<Formateur> findByEmail(String email) {
        return formateurRepository.findByEmail(email);
    }

    @Override
    public Optional<Formateur> saveFormateur(Formateur formateur) {
        return Optional.of(formateurRepository.save(formateur));
    }

    @Override
    public Optional<Formateur> updateFormateur(Formateur formateur) {
        return Optional.of(formateurRepository.save(formateur));
    }

    @Override
    public void deleteAll() {
       formateurRepository.deleteAll();
    }

    @Override
    public void deletById(String id) {
        formateurRepository.deleteById(id);
    }
    
}
