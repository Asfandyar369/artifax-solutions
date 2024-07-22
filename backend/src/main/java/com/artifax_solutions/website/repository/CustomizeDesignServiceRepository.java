package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.CustomizeDesignService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomizeDesignServiceRepository extends JpaRepository<CustomizeDesignService, Long> {
    CustomizeDesignService findFirstByOrderByIdAsc();
}
