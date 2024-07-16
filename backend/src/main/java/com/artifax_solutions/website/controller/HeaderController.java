package com.artifax_solutions.website.controller;

import com.artifax_solutions.website.dto.LogoDto;
import com.artifax_solutions.website.serviceInterface.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/header")
@CrossOrigin
public class HeaderController {

    @Autowired
    HeaderService headerService;
    @GetMapping
    public ResponseEntity<LogoDto> getAllLogosWithMenus() {
        LogoDto navbarDto = headerService.findFirst();
        return ResponseEntity.ok(navbarDto);
    }
}
