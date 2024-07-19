package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.FooterDTO;
import com.artifax_solutions.website.service.serviceInterface.FooterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/footer")
public class FooterController {
    @Autowired
    private FooterService service;

    @GetMapping
    private ResponseEntity<FooterDTO> getFooter() {
        return ResponseEntity.ok(service.getFooter());
    }
}
