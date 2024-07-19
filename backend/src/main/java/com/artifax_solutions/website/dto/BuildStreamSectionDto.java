package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuildStreamSectionDto {
    private Long id;
    private String heading;
    private String buttonText;
    private String buttonLink;
}
