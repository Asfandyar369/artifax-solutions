package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.PricingService;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PricingCardDto {
    private Long id;
    private String title;
    private String price;
    private String description;
    private List<PricingServiceDto> pricingServiceList;
    private String buttonText;
    private String buttonLink;
}
