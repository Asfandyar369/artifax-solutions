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
@Table(name = "show_case_3d_scene_card")
public class ShowCase3DSceneCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;
    private String altText;
    private String title;
    private String description;
    @ManyToOne
    @JoinColumn(name = "portfolio_3d_scene_id")
    @ToString.Exclude
    @JsonIgnore
    private Portfolio3DScene portfolio3DScene;
}
