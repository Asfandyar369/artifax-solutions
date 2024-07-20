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
@Table(name = "show_case_pfps_card")
public class ShowCasePFPsCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;
    private String altText;
    private String title;
    private String description;
    @ManyToOne
    @JoinColumn(name = "portfolio_pfps_id")
    @ToString.Exclude
    @JsonIgnore
    private PortfolioPFPs portfolioPFPs;
}
