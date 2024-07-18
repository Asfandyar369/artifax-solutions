package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.AcquireSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcquireSectionRepository extends JpaRepository<AcquireSection, Long> {
    AcquireSection findFirstByOrderByIdAsc();
}
