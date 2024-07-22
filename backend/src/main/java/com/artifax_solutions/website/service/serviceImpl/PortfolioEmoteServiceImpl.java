package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioEmoteDto;
import com.artifax_solutions.website.model.PortfolioEmote;
import com.artifax_solutions.website.repository.PortfolioEmoteRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioEmoteService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioEmoteServiceImpl implements PortfolioEmoteService {
    private final PortfolioEmoteRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioEmoteServiceImpl(PortfolioEmoteRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioEmoteDto getPortfolioEmote() {
        PortfolioEmote portfolioEmote = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioEmote, PortfolioEmoteDto.class);
    }
}
