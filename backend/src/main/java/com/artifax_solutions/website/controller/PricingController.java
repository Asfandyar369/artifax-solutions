package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PricingDto;
import com.artifax_solutions.website.service.serviceInterface.PricingSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/pricing")
public class PricingController {
    @Autowired
    private PricingSectionService service;

    @GetMapping
    private ResponseEntity<PricingDto> getPricing() {
        return ResponseEntity.ok(service.getPricing());
    }
}
