package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.OurService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OurServiceRepository extends JpaRepository<OurService, Long> {
    OurService findFirstByOrderByIdAsc();
}
