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
public class CustomizeDesignServiceButton {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String buttonText;

    private String buttonUrl;

    @ManyToOne
    @JoinColumn(name = "customize_design_service_id")
    @ToString.Exclude
    @JsonIgnore
    private CustomizeDesignService customizeDesignService;
}
