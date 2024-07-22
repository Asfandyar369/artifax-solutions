package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioStreamPackDto;
import com.artifax_solutions.website.model.PortfolioStreamPack;
import com.artifax_solutions.website.repository.PortfolioStreamPackRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioStreamPackService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioStreamPackServiceImpl implements PortfolioStreamPackService {
    private final PortfolioStreamPackRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioStreamPackServiceImpl(PortfolioStreamPackRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioStreamPackDto getPortfolioStreamPack() {
        PortfolioStreamPack portfolioStreamPack = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioStreamPack, PortfolioStreamPackDto.class);
    }
}
