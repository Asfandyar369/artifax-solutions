package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.StreamingCreativitySection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamingCreativitySectionRepository extends JpaRepository<StreamingCreativitySection, Long> {
    StreamingCreativitySection findFirstByOrderByIdAsc();
}
