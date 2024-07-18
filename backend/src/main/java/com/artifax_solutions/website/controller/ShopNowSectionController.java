package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.ShopNowSectionDto;
import com.artifax_solutions.website.Service.serviceInterface.ShopNowSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/shop-now-section")
public class ShopNowSectionController {
    @Autowired
    private ShopNowSectionService service;
    @GetMapping
    public ResponseEntity<ShopNowSectionDto> getShopNowSection() {
        return ResponseEntity.ok(service.getShopNowSection());
    }
}
