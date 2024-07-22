package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioModelDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-model")
public class PortfolioModelController {
    @Autowired
    private PortfolioModelService service;

    @GetMapping
    private ResponseEntity<PortfolioModelDto> getPortfolioModel() {
        return ResponseEntity.ok(service.getPortfolioModel());
    }

}
