package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioBanner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioBannerRepository extends JpaRepository<PortfolioBanner,Long> {
    PortfolioBanner findFirstByOrderByIdAsc();
}
