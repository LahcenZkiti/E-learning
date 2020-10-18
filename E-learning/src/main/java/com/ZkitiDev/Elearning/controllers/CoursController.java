package com.ZkitiDev.Elearning.controllers;

import java.util.List;

import com.ZkitiDev.Elearning.exception.ResourceAlreadyExistsException;
import com.ZkitiDev.Elearning.exception.ResourceNotFoundException;
import com.ZkitiDev.Elearning.models.Cours;
import com.ZkitiDev.Elearning.services.CoursServiceImpl;

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
@RequestMapping("/api/courses")
public class CoursController {
    @Autowired
    private CoursServiceImpl coursServiceImpl;

    @GetMapping
    public ResponseEntity<List<Cours>> getAllCourses() throws ResourceNotFoundException{
        List<Cours> list = coursServiceImpl.findAll()
                                            .orElseThrow(()-> new ResourceNotFoundException("No cours found"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Cours> getCoursById(@PathVariable("id")String id) throws ResourceNotFoundException{
        Cours cours = coursServiceImpl.findById(id)
                                        .orElseThrow(()-> new ResourceNotFoundException("There is not cours with id : "+ id));
        return new ResponseEntity<>(cours, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Cours> createCours(@RequestBody Cours cours) throws ResourceAlreadyExistsException {
        Cours result = coursServiceImpl.saveCourse(cours)
                                        .orElseThrow(()-> new ResourceAlreadyExistsException("Could not create "+ cours.toString()));
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cours> updateCours(@PathVariable("id")String id, @RequestBody Cours coursDetails) throws ResourceNotFoundException {
        Cours cours = coursServiceImpl.findById(id)
                                        .orElseThrow(()-> new ResourceNotFoundException("No cours with id: "+ id));
        cours.setTitle(coursDetails.getTitle());
        cours.setLink(coursDetails.getLink());
        cours.setDescription(coursDetails.getDescription());

        Cours updatedCours = coursServiceImpl.updateCours(cours)
                                                .orElseThrow(()-> new ResourceNotFoundException("Could not update "+ coursDetails.toString()));
        return new ResponseEntity<>(updatedCours, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCours(@PathVariable("id")String id){
        try {
            coursServiceImpl.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
