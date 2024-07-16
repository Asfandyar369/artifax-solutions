package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.CarouselDto;
import com.artifax_solutions.website.model.Carousel;
import com.artifax_solutions.website.serviceInterface.CarouselService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/carousel")
@CrossOrigin
public class CarouselController {
    @Autowired
    private CarouselService carouselService;

    @GetMapping
    public ResponseEntity<CarouselDto> getCarousels() {
        CarouselDto carouselDto = carouselService.getCarousel();
        return ResponseEntity.ok(carouselDto);
    }
}
