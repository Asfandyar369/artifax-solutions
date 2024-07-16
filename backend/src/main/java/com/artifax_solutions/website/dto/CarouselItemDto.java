package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.Carousel;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarouselItemDto {
    private Long id;
    private String imageUrl;
    private String title;
    private String description;
    private String buttonText;
    private String buttonLink;
    private Carousel carousel;
}
