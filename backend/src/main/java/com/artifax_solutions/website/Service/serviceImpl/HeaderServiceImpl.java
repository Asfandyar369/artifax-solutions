package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.LogoDto;
import com.artifax_solutions.website.dto.NavbarDto;
import com.artifax_solutions.website.model.Logo;
import com.artifax_solutions.website.repository.LogoRepository;
import com.artifax_solutions.website.Service.serviceInterface.HeaderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class HeaderServiceImpl implements HeaderService {
    private final LogoRepository repository;
    private final ModelMapper modelMapper;

    public HeaderServiceImpl(LogoRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public LogoDto findFirst() {
        Logo logo = repository.findFirstByOrderByIdAsc();
        return mapLogoToDto(logo);
    }

    private LogoDto mapLogoToDto(Logo logo) {
        LogoDto logoDto = modelMapper.map(logo, LogoDto.class);

        // Assuming the url is already in Base64 format in byte[]
        String base64EncodedUrl = new String(logo.getUrl(), StandardCharsets.UTF_8);
        logoDto.setUrl(base64EncodedUrl);

        // Map navbar menus to NavbarDto list
        List<NavbarDto> navbarMenusDto = logo.getNavbarMenus().stream()
                .map(navbar -> modelMapper.map(navbar, NavbarDto.class))
                .collect(Collectors.toList());
        logoDto.setNavbarMenus(navbarMenusDto);

        return logoDto;
    }
}
