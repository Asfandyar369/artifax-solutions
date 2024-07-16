package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.StreamerSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamerSectionRepository extends JpaRepository<StreamerSection, Long> {
    StreamerSection findFirstByOrderByIdAsc();
}
