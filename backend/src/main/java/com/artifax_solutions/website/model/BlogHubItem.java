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
public class BlogHubItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imageUrl;
    private String altText;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String linkUrl;
    @ManyToOne
    @JoinColumn(name = "section_id", nullable = false)
    @ToString.Exclude
    @JsonIgnore
    private BlogHubSection section;
}
