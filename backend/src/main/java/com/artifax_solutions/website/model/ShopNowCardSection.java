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
public class ShopNowCardSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imageUrl;
    private String altText;
    private String link;
    private String title;
    private String priceRange;
    @ToString.Exclude
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "shop_now_section_id")
    private ShopNowSection shopNowSection;
}
