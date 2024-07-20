package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioShowcaseDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioShowcaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-showcase")
public class PortfolioShowcaseController {
    @Autowired
    private PortfolioShowcaseService service;

    @GetMapping
    public ResponseEntity<PortfolioShowcaseDto> getPortfolioShowcase() {
        return ResponseEntity.ok(service.getPortfolioShowcase());
    }
}
