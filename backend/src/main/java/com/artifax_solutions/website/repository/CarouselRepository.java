package com.artifax_solutions.website.repository;

import com.artifax_solutions.website.model.Carousel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarouselRepository extends JpaRepository<Carousel, Long> {
    Carousel findFirstByOrderByIdAsc();
}
