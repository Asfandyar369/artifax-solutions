package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.BlogHubItem;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogHubSectionDto {
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    private String buttonText;
    private String buttonUrl;
    private boolean showNavigationArrows;
    private boolean showNavigationIndicators;
    private List<BlogHubItemDto> itemList;
}
