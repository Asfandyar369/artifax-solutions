package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.StreamerFeature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamerFeatureRepository extends JpaRepository<StreamerFeature,Long> {
    StreamerFeature findFirstByOrderByIdAsc();
}
