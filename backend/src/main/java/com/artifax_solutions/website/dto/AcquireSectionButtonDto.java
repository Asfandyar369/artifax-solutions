package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AcquireSectionButtonDto {

    private Long id;
    private String buttonText;
    private String buttonUrl;
}
