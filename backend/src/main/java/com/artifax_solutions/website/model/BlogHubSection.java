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
public class BlogHubSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    private String buttonText;
    private String buttonUrl;
    private boolean showNavigationArrows;
    private boolean showNavigationIndicators;
    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL)
    private List<BlogHubItem> itemList;
}
