package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioPFPs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioPFPsRepository extends JpaRepository<PortfolioPFPs, Long> {
    PortfolioPFPs findFirstByOrderByIdAsc();
}
