package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioEmote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioEmoteRepository extends JpaRepository<PortfolioEmote, Long> {
    PortfolioEmote findFirstByOrderByIdAsc();
}
