package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioPFPsDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioPFPsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-pfps")
public class PortfolioPFPsController {
    @Autowired
    private PortfolioPFPsService service;

    @GetMapping
    private ResponseEntity<PortfolioPFPsDto> getPortfolioPFPs() {
        return ResponseEntity.ok(service.getPortfolioPFPs());
    }
}
