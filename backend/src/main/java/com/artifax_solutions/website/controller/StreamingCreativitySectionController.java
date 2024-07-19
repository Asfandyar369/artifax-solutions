package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.StreamingCreativitySectionDto;
import com.artifax_solutions.website.service.serviceInterface.StreamingCreativitySectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/streaming-creativity-section")
public class StreamingCreativitySectionController {
    @Autowired
    private StreamingCreativitySectionService service;

    @GetMapping
    private ResponseEntity<StreamingCreativitySectionDto> getStreamingCreativitySection() {
        return ResponseEntity.ok(service.getStreamingCreativitySection());
    }
}
