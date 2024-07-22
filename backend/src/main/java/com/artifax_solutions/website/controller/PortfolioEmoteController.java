package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.PortfolioEmoteDto;
import com.artifax_solutions.website.service.serviceInterface.PortfolioEmoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-emote")
public class PortfolioEmoteController {
    @Autowired
    private PortfolioEmoteService service;

    @GetMapping
    private ResponseEntity<PortfolioEmoteDto> getPortfolioEmote() {
        return ResponseEntity.ok(service.getPortfolioEmote());
    }
}
