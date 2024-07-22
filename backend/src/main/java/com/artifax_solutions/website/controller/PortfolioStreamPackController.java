package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioStreamPackDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioStreamPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-stream-pack")
public class PortfolioStreamPackController {
    @Autowired
    private PortfolioStreamPackService service;

    @GetMapping
    private ResponseEntity<PortfolioStreamPackDto> getPortfolioStreamPack() {
        return ResponseEntity.ok(service.getPortfolioStreamPack());
    }
}
