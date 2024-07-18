package com.artifax_solutions.website.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CounterCardSectionImageDto {
    private Long id;
    private String imageUrl;
    private String altText;
    private List<CounterCardSectionDto> counterCards;
}
