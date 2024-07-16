package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.Logo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogoRepository extends JpaRepository<Logo, Long> {
    Logo findFirstByOrderByIdAsc();
}
