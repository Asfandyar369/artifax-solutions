package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.Portfolio3DScene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Portfolio3DSceneRepository extends JpaRepository<Portfolio3DScene, Long> {
    Portfolio3DScene findFirstByOrderByIdAsc();
}
