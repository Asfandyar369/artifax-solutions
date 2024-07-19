package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.BuildStreamSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildStreamSectionRepository extends JpaRepository<BuildStreamSection, Long> {

    BuildStreamSection findFirstByOrderByIdAsc();
}
