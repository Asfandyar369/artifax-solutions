package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.BlogHubSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogHubSectionRepository extends JpaRepository<BlogHubSection, Long> {
    BlogHubSection findFirstByOrderByIdAsc();
}
