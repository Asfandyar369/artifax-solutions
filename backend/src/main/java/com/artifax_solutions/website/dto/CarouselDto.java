package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.CarouselItem;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarouselDto {
    private Long id;
    private String name;
    private List<CarouselItemDto> items;
}
