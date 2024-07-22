package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioModelRepository extends JpaRepository<PortfolioModel, Long> {
    PortfolioModel findFirstByOrderByIdAsc();
}
