package com.ZkitiDev.Elearning.repositories;

import com.ZkitiDev.Elearning.models.Cours;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursRepository extends JpaRepository<Cours, String> {
    
}
