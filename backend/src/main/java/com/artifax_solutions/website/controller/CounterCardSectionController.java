package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.CounterCardSectionImageDto;
import com.artifax_solutions.website.service.serviceInterface.CounterCardSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/counter-card-section")
public class CounterCardSectionController {
    @Autowired
    private CounterCardSectionService service;

    @GetMapping
    public ResponseEntity<CounterCardSectionImageDto> getCounterCardSection() {
        return ResponseEntity.ok(service.getCounterCards());
    }
}
