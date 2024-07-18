package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopNowSectionDto {
    private Long id;
    private String subtitle;
    private String title;
    private String description;
    private String buttonText;
    private String buttonUrl;
    private List<ShopNowCardSectionDto> cardList;
}
