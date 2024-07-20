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
public class MenuButton {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String buttonText;
    private String buttonLink;

    @ManyToOne
    @JoinColumn(name = "menu_heading_id")
    @ToString.Exclude
    @JsonIgnore
    private MenuHeading menuHeading;
}
