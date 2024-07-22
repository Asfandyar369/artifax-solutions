package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.PortfolioHeaderBanner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioHeaderBannerRepository extends JpaRepository<PortfolioHeaderBanner,Long> {
    PortfolioHeaderBanner findFirstByOrderByIdAsc();
}
