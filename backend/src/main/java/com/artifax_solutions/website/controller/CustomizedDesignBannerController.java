package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.CustomizedDesignBannerDto;
import com.artifax_solutions.website.service.serviceInterface.CustomizedDesignBannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/customized-design-banner")
public class CustomizedDesignBannerController {
    @Autowired
    private CustomizedDesignBannerService service;

    @GetMapping
    private ResponseEntity<CustomizedDesignBannerDto> getCustomizedDesignBanner(){
        return ResponseEntity.ok(service.getCustomizedDesignBanner());
    }
}
