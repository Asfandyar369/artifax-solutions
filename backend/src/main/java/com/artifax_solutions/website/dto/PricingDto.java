package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.PricingCard;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PricingDto {
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    private List<PricingCardDto> cardList;
}
