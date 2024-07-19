package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.Footer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FooterRepository extends JpaRepository<Footer, Long> {
    Footer findFirstByOrderByIdAsc();
}
