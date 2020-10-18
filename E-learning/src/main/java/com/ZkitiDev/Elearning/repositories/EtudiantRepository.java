package com.ZkitiDev.Elearning.repositories;

import com.ZkitiDev.Elearning.models.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
    Optional<Etudiant> findById(String etudiantId);

    Optional<Etudiant> findByUsername(String username);
    
	Optional<Etudiant> findByEmail(String email);
}
