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
public class AcquireSectionUsefulLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String linkText;

    private String url;

    @ManyToOne
    @JoinColumn(name = "acquire_section_id")
    @ToString.Exclude
    @JsonIgnore
    private AcquireSection acquireSection;

}
