package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.AcquireSection;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AcquireSectionSlideDto {
    private Long id;
    private String imageUrl;
    private String altText;
}
