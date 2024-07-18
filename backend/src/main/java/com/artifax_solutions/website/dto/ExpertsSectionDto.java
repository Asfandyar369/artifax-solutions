package com.artifax_solutions.website.dto;

import jakarta.persistence.ElementCollection;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpertsSectionDto {
    private Long id;
    private List<String> carouselImages;
    private String subtitle;
    private String title;
    private String description;
    private List<ProgressDataDto> progressData;
}
