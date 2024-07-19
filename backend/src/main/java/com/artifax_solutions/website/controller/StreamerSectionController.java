package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.StreamerSectionDto;
import com.artifax_solutions.website.service.serviceInterface.StreamerSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/streamer-section")
@CrossOrigin
public class StreamerSectionController {
    @Autowired
    private StreamerSectionService streamerSectionService;

    @GetMapping
    public ResponseEntity<StreamerSectionDto> getStreamerSection() {
        StreamerSectionDto streamerSectionDto = streamerSectionService.getStreamerSection();
        return ResponseEntity.ok(streamerSectionDto);
    }

}
