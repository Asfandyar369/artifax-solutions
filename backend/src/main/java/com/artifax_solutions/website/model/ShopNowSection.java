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
public class ShopNowSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subtitle;
    private String title;
    private String description;
    private String buttonText;
    private String buttonUrl;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "shop_now_section_id")
    private List<ShopNowCardSection> cardList;
}