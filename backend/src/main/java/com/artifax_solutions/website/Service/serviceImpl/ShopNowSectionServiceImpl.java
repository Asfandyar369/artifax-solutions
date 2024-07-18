package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.ShopNowSectionDto;
import com.artifax_solutions.website.model.ShopNowSection;
import com.artifax_solutions.website.repository.ShopNowSectionRepository;
import com.artifax_solutions.website.Service.serviceInterface.ShopNowSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ShopNowSectionServiceImpl implements ShopNowSectionService {
    private final ShopNowSectionRepository repository;
    private final ModelMapper mapper;

    public ShopNowSectionServiceImpl(ShopNowSectionRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public ShopNowSectionDto getShopNowSection() {
        ShopNowSection shopNowSection = repository.findFirstByOrderByIdAsc();
        return mapper.map(shopNowSection, ShopNowSectionDto.class);
    }
}
