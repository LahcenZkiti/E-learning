package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Cours;
import com.ZkitiDev.Elearning.repositories.CoursRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoursServiceImpl implements CoursService {

    @Autowired
    private CoursRepository coursRepository;

    @Override
    public Optional<List<Cours>> findAll() {
        
        return Optional.of(coursRepository.findAll());
    }

    @Override
    public Optional<Cours> findById(String id) {
        
        return coursRepository.findById(id);
    }

    @Override
    public Optional<Cours> saveCourse(Cours cours) {
        
        return Optional.of(coursRepository.save(cours));
    }

    @Override
    public Optional<Cours> updateCours(Cours cours) {
        // TODO Auto-generated method stub
        return Optional.of(coursRepository.save(cours));
    }

    @Override
    public void deleteById(String id) {
        coursRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        coursRepository.deleteAll();
    }
    
}
