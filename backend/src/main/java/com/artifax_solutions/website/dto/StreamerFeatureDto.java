package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StreamerFeatureDto {
    private Long id;
    private String sectionSubtitle;
    private String sectionTitle;
    private String sectionDescription;
    private List<CardDto> cards;
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CardDto {
        private String icon;
        private String title;
        private String description;
    }
}
