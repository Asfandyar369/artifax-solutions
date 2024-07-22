package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioHeaderBannerDto;
import com.artifax_solutions.website.model.PortfolioHeaderBanner;
import com.artifax_solutions.website.repository.PortfolioHeaderBannerRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioHeaderBannerService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioHeaderBannerServiceImpl implements PortfolioHeaderBannerService {
    private final PortfolioHeaderBannerRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioHeaderBannerServiceImpl(PortfolioHeaderBannerRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioHeaderBannerDto getPortfolioHeaderBanner() {
        PortfolioHeaderBanner portfolioHeaderBanner = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioHeaderBanner, PortfolioHeaderBannerDto.class);
    }
}
