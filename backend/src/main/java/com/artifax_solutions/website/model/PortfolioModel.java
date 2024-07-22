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
public class PortfolioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    @ElementCollection
    private List<String> filterOptions;
    @OneToMany(mappedBy = "portfolioModel")
    private List<ShowCaseModelCard> showCaseCardList;
}
