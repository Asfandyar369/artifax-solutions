package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.AcquireSection;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AcquireSectionUsefulLinkDto {
    private Long id;
    private String linkText;
    private String url;
}
