package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.MenuIcon;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuListDTO {
    private Long id;
    private String menuName;
    private String linkUrl;
}
