package com.ZkitiDev.Elearning.repositories;

import java.util.Optional;

import com.ZkitiDev.Elearning.models.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur, String> {
    
    Optional<Formateur> findByUsername(String username);

    Optional<Formateur> findByEmail(String email);
}
