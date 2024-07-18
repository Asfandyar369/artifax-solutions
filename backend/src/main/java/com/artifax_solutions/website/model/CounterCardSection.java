package com.artifax_solutions.website.model;

import com.artifax_solutions.website.dto.CounterCardSectionImageDto;
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
public class CounterCardSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long countValue;
    private String icon;
    private String label;
    @ManyToOne
    @JoinColumn(name = "image_id")
    @ToString.Exclude
    @JsonIgnore
    private CounterCardSectionImage backgroundImg;
}
