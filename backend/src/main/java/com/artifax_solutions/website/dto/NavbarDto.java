package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NavbarDto {
    private Long id;
    private String name;
    private String link;
    private List<NestedMenuDto> nestedMenus;
}
