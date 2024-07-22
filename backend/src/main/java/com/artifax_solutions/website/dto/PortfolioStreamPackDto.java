package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.ShowCaseStreamPackCard;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PortfolioStreamPackDto {
    private Long id;
    private String subTitle;
    private String title;
    private String description;
    private List<String> filterOptions;
    private List<ShowCaseStreamPackCardDto> showCaseCardList;
}
