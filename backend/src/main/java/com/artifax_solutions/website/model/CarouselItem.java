package com.artifax_solutions.website.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CarouselItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;
    private String title;
    private String description;
    private String buttonText;
    private String buttonLink;

    @ManyToOne
    @JoinColumn(name = "carousel_id")
    @ToString.Exclude
    @JsonIgnore
    private Carousel carousel;
}
