package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.CustomizedDesignBanner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomizedDesignBannerRepository extends JpaRepository<CustomizedDesignBanner,Long> {
    CustomizedDesignBanner findFirstByOrderByIdAsc();

}
