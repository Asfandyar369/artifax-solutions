package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SocialSectionDto {
    private Long id;
    private String title;
    private String subTitle;
    private String buttonText;
    private String description;
    private String buttonIconSvg;
    private String profileImageUrl;
    private String profileImageAltText;
    private List<SocialPostDto> postList;
    private List<SocialMediaLinkDto> socialMediaLinks;
}
