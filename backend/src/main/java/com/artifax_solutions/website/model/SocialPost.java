package com.artifax_solutions.website.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class SocialPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imageUrl;
    @Column(columnDefinition = "TEXT")
    private String altText;
    @ManyToOne
    @JoinColumn(name = "social_section_id")
    @ToString.Exclude
    @JsonIgnore
    private SocialSection socialSection;
}
