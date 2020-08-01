package com.ZkitiDev.Elearning.repositories;

import com.ZkitiDev.Elearning.models.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
}
