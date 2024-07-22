package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.CustomizeDesignServiceDto;
import com.artifax_solutions.website.model.CustomizeDesignService;
import com.artifax_solutions.website.service.serviceInterface.CustomizeDesignServiceSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/customize-design-service")
public class CustomizeDesignServiceController {
    @Autowired
    private CustomizeDesignServiceSectionService service;

    @GetMapping
    private ResponseEntity<CustomizeDesignServiceDto> getCustomizeDesignService() {
        return ResponseEntity.ok(service.getCustomizeDesignService());
    }
}
