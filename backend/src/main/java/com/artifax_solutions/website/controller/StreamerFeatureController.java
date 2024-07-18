package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.StreamerFeatureDto;
import com.artifax_solutions.website.Service.serviceInterface.StreamerFeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/streamer-feature")
public class StreamerFeatureController {
    @Autowired
    private StreamerFeatureService service;

    @GetMapping
    public ResponseEntity<StreamerFeatureDto> getFeature() {
        return ResponseEntity.ok(service.getFeature());
    }

}
