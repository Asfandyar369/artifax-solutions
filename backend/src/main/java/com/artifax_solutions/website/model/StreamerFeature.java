package com.artifax_solutions.website.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StreamerFeature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sectionSubtitle;
    private String sectionTitle;
    private String sectionDescription;

    @ElementCollection
    @CollectionTable(name = "feature_cards", joinColumns = @JoinColumn(name = "feature_id"))
    private List<Card> cards = new ArrayList<>();

    // getters and setters

    @Embeddable
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Card {
        private String icon;
        private String title;
        private String description;
    }
}