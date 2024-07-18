package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.CounterCardSection;
import com.artifax_solutions.website.model.CounterCardSectionImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CounterCardSectionRepository extends JpaRepository<CounterCardSectionImage, Long> {
    CounterCardSectionImage findFirstByOrderByIdAsc();
}
