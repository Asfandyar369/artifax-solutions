package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuHeadingDTO {
    private Long id;
    private String heading;
    private List<MenuListDTO> menuList;
    private List<MenuIconDto> menuIconList;
    private List<MenuButtonDto> menuButtonList;
}
