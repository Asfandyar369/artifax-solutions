package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.BuildStreamSectionDto;
import com.artifax_solutions.website.service.serviceInterface.BuildStreamSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/build-stream-section")
public class BuildStreamSectionController {
    @Autowired
    private BuildStreamSectionService service;

    @GetMapping
    private ResponseEntity<BuildStreamSectionDto> getBuildStreamSection() {
        return ResponseEntity.ok(service.getBuildStreamSection());
    }
}
