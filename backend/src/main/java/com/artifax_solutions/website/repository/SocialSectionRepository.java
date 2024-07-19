package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.SocialSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocialSectionRepository extends JpaRepository<SocialSection, Long> {
    SocialSection findFirstByOrderByIdAsc();
}
