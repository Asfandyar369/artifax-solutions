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
public class MenuHeading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String heading;

    @OneToMany(mappedBy = "menuHeading")
    private List<MenuList> menuList;

    @OneToMany(mappedBy = "menuHeading")
    private List<MenuIcon> menuIconList;

    @OneToMany(mappedBy = "menuHeading")
    private List<MenuButton> menuButtonList;

    @ManyToOne
    @JoinColumn(name = "footer_id")
    @ToString.Exclude
    @JsonIgnore
    private Footer footer;
}
