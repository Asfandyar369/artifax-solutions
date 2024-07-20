package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioShowcase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioShowcaseRepository extends JpaRepository<PortfolioShowcase, Long> {
    PortfolioShowcase findFirstByOrderByIdAsc();
}
