package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.Service.serviceInterface.BlogHubSectionService;
import com.artifax_solutions.website.dto.BlogHubSectionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/blog-hub-section")
public class BlogHubController {
    @Autowired
    private BlogHubSectionService service;

    @GetMapping
    public ResponseEntity<BlogHubSectionDto> getBlogHubSection() {
        return ResponseEntity.ok(service.getBlogHubSection());
    }
}
