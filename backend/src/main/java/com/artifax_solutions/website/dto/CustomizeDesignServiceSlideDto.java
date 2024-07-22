package com.artifax_solutions.website.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomizeDesignServiceSlideDto {
    private Long id;
    private String imageUrl;
    private String altText;
}
