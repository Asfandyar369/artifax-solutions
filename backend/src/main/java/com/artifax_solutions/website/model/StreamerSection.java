package com.artifax_solutions.website.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StreamerSection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> carouselImages;

    private String title;
    private String subtitle;
    private String description;

    @ElementCollection
    private List<String> headings;

    @ElementCollection
    private List<String> texts;
    private String buttonText;
    private String buttonLink;
}

