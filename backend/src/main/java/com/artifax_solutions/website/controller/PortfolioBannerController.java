package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioBannerDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioBannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-banner")
public class PortfolioBannerController {
    @Autowired
    private PortfolioBannerService service;

    @GetMapping
    private ResponseEntity<PortfolioBannerDto> getPortfolioBanner() {
        return ResponseEntity.ok(service.getPortfolioBanner());
    }
}
