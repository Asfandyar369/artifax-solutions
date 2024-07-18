package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.ExpertsSectionDto;
import com.artifax_solutions.website.Service.serviceInterface.ExpertsSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/expert-section")
public class ExpertSectionController {
    @Autowired
    private ExpertsSectionService service;

    @GetMapping
    public ResponseEntity<ExpertsSectionDto> getExpertsSection() {
        return ResponseEntity.ok(service.getExpertsSection());
    }
}
