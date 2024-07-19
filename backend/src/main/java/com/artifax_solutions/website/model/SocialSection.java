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
public class SocialSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String subTitle;
    private String buttonText;
    private String description;
    @Column(columnDefinition = "TEXT")
    private String buttonIconSvg;
    private String profileImageUrl;
    private String profileImageAltText;
    @OneToMany(mappedBy = "socialSection")
    private List<SocialPost> postList;
    @OneToMany(mappedBy = "socialSection")
    private List<SocialMediaLink> socialMediaLinks;
}
