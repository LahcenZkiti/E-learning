package com.ZkitiDev.Elearning.services;

import java.util.List;
import java.util.Optional;

import com.ZkitiDev.Elearning.models.Cours;

public interface CoursService {
    Optional<List<Cours>> findAll();

    Optional <Cours> findById(String id);

    public Optional <Cours> saveCourse(Cours cours);
    
    public Optional <Cours> updateCours(Cours cours);

    void deleteById(String id);

    public void deleteAll();
}
