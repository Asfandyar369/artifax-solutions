package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.SocialSectionDto;
import com.artifax_solutions.website.service.serviceInterface.SocialSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/social-section")
public class SocialSectionController {
    @Autowired
    private SocialSectionService service;

    @GetMapping
    private ResponseEntity<SocialSectionDto> getSocialSection() {
        return ResponseEntity.ok(service.getSocialSection());
    }
}
