package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.CustomizeDesignServiceBenefit;
import com.artifax_solutions.website.model.CustomizeDesignServiceButton;
import com.artifax_solutions.website.model.CustomizeDesignServiceSlide;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomizeDesignServiceDto {
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    private List<CustomizeDesignServiceSlideDto> carouselSlides;
    private List<CustomizeDesignServiceBenefitDto> benefitList;
    private List<CustomizeDesignServiceButtonDto> callToActions;
}
