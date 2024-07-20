package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioBannerDto;
import com.artifax_solutions.website.model.PortfolioBanner;
import com.artifax_solutions.website.repository.PortfolioBannerRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioBannerService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioBannerServiceImpl implements PortfolioBannerService {
    private final PortfolioBannerRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioBannerServiceImpl(PortfolioBannerRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioBannerDto getPortfolioBanner() {
        PortfolioBanner portfolioBanner = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioBanner, PortfolioBannerDto.class);
    }
}
