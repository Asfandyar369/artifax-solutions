package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.ExpertsSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpertsSectionRepository extends JpaRepository<ExpertsSection, Long> {
    ExpertsSection findFirstByOrderByIdAsc();
}
