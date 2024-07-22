package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.OurServiceDto;
import com.artifax_solutions.website.model.OurService;
import com.artifax_solutions.website.service.serviceInterface.OurServiceSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/our-service")
public class OurServiceController {
    @Autowired
    private OurServiceSectionService service;

    @GetMapping
    private ResponseEntity<OurServiceDto> getOurService(){
        return ResponseEntity.ok(service.getOurService());
    }
}
