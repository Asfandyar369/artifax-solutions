package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.AcquireSectionDto;
import com.artifax_solutions.website.service.serviceInterface.AcquireSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
@RequestMapping("/api/acquire-section")
public class AcquireSectionController {
    @Autowired
    private AcquireSectionService service;

    @GetMapping
    public ResponseEntity<AcquireSectionDto> getAcquireSection() {
        return ResponseEntity.ok(service.getAcquireSection());
    }
}
