package com.artifax_solutions.website.dto;

import com.artifax_solutions.website.model.Navbar;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogoDto {
    private Long id;

    private String url;

    private List<NavbarDto> navbarMenus;
}
