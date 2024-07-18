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
public class AcquireSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subTitle;

    @Column(columnDefinition = "TEXT")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "acquireSection", cascade = CascadeType.ALL)
    private List<AcquireSectionSlide> carouselSlides;

    @OneToMany(mappedBy = "acquireSection", cascade = CascadeType.ALL)
    private List<AcquireSectionUsefulLink> usefulLinks;

    @OneToMany(mappedBy = "acquireSection", cascade = CascadeType.ALL)
    private List<AcquireSectionButton> callToActions;
}
