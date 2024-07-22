package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioStreamPack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioStreamPackRepository extends JpaRepository<PortfolioStreamPack, Long> {
    PortfolioStreamPack findFirstByOrderByIdAsc();
}
