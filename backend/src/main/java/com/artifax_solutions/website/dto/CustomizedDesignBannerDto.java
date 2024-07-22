package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomizedDesignBannerDto {
    private Long id;
    private String imageUrl;
    private String mainTitle;
    private String subtitle;
    private String buttonText;
    private String buttonLink;
}
