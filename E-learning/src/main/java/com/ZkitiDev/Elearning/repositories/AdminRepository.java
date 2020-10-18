package com.ZkitiDev.Elearning.repositories;

import com.ZkitiDev.Elearning.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,String> {
}
