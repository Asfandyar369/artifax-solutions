package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.Portfolio3DSceneDto;
import com.artifax_solutions.website.service.serviceInterface.Portfolio3DSceneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/portfolio-3d-scene")
public class Portfolio3DSceneController {
    @Autowired
    private Portfolio3DSceneService service;

    @GetMapping
    private ResponseEntity<Portfolio3DSceneDto> getPortfolio3DScene() {
        return ResponseEntity.ok(service.getPortfolio3DScene());
    }
}
