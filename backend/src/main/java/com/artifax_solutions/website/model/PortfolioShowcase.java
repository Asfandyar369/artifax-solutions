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
public class PortfolioShowcase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subTitle;
    private String title;
    private String description;

    @OneToMany(mappedBy = "portfolioShowcase")
    private List<PortfolioShowcaseCard> showCaseCardList;
}
