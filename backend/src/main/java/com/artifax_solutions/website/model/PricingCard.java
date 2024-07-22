package com.artifax_solutions.website.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PricingCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String price;
    private String description;
    @OneToMany(mappedBy = "pricingCard")
    private List<PricingService> pricingServiceList;
    private String buttonText;
    private String buttonLink;
    @ToString.Exclude
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "pricing_id")
    private Pricing pricing;
}
