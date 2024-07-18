package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogHubItemDto {
    private Long id;
    private String imageUrl;
    private String altText;
    private String title;
    private String content;
    private String linkUrl;
}
