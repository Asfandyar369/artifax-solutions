package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StreamerSectionDto {
    private Long id;
    private List<String> carouselImages;
    private String title;
    private String subtitle;
    private String description;
    private List<String> headings;
    private List<String> texts;
    private String buttonText;
    private String buttonLink;
}
