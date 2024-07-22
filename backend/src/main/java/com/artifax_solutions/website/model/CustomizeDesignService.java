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
public class CustomizeDesignService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subTitle;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    @OneToMany(mappedBy = "customizeDesignService", cascade = CascadeType.ALL)
    private List<CustomizeDesignServiceSlide> carouselSlides;

    @OneToMany(mappedBy = "customizeDesignService", cascade = CascadeType.ALL)
    private List<CustomizeDesignServiceBenefit> benefitList;

    @OneToMany(mappedBy = "customizeDesignService", cascade = CascadeType.ALL)
    private List<CustomizeDesignServiceButton> callToActions;
}
