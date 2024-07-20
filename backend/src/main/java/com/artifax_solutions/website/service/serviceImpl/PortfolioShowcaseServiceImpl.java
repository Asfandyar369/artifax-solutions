package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioShowcaseDto;
import com.artifax_solutions.website.model.PortfolioShowcase;
import com.artifax_solutions.website.repository.PortfolioShowcaseRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioShowcaseService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioShowcaseServiceImpl implements PortfolioShowcaseService {
    private final PortfolioShowcaseRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioShowcaseServiceImpl(PortfolioShowcaseRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioShowcaseDto getPortfolioShowcase() {
        PortfolioShowcase portfolioShowcase = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioShowcase, PortfolioShowcaseDto.class);
    }
}
