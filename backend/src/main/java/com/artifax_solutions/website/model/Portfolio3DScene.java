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
@Table(name = "portfolio_3d_scene")
public class Portfolio3DScene {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    @OneToMany(mappedBy = "portfolio3DScene")
    private List<ShowCase3DSceneCard> showCaseCardList;
}
