package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PricingRepository extends JpaRepository<Pricing, Long> {
    Pricing findFirstByOrderByIdAsc();
}
