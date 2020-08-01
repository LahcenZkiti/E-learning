package com.ZkitiDev.Elearning.repositories;

import com.ZkitiDev.Elearning.models.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur, String> {
}
