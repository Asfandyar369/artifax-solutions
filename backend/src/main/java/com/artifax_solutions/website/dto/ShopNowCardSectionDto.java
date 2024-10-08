package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopNowCardSectionDto {
    private Long id;
    private String imageUrl;
    private String altText;
    private String link;
    private String title;
    private String priceRange;
}
