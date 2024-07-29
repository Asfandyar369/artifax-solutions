package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.service.serviceInterface.GooglePlacesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/places")
public class GooglePlacesController {
    @Autowired
    private GooglePlacesService googlePlacesService;

    @GetMapping("/details")
    public Map<String, Object> getPlaceDetails(@RequestParam String placeId) {
        return googlePlacesService.getPlaceDetails(placeId);
    }
}
