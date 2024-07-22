package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioHeaderBannerDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioHeaderBannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-header-banner")
public class PortfolioHeaderBannerController {
    @Autowired
    private PortfolioHeaderBannerService service;

    @GetMapping
    private ResponseEntity<PortfolioHeaderBannerDto> getPortfolioHeaderBanner() {
        return ResponseEntity.ok(service.getPortfolioHeaderBanner());
    }
}
