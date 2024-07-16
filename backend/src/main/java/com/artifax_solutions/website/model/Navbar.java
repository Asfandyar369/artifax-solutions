package com.artifax_solutions.website.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Navbar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String link;

    @ManyToOne
    @JoinColumn(name = "image_id")
    @ToString.Exclude
    @JsonIgnore
    private Logo logoImage;

    @OneToMany(mappedBy = "navbar")
    private List<NestedMenu> nestedMenus;
}
