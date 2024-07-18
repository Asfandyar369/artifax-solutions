package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.ShopNowSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopNowSectionRepository extends JpaRepository<ShopNowSection, Long> {
    ShopNowSection findFirstByOrderByIdAsc();
}
