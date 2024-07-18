package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.AcquireSectionButton;
import com.artifax_solutions.website.model.AcquireSectionSlide;
import com.artifax_solutions.website.model.AcquireSectionUsefulLink;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AcquireSectionDto {
    private Long id;
    private String title;
    private String subTitle;
    private String description;
    private List<AcquireSectionSlideDto> carouselSlides;
    private List<AcquireSectionUsefulLinkDto> usefulLinks;
    private List<AcquireSectionButtonDto> callToActions;
}
