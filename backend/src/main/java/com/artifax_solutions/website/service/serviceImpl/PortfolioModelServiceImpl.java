package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioModelDto;
import com.artifax_solutions.website.model.PortfolioModel;
import com.artifax_solutions.website.repository.PortfolioModelRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioModelService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioModelServiceImpl implements PortfolioModelService {
    private final PortfolioModelRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioModelServiceImpl(PortfolioModelRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioModelDto getPortfolioModel() {
        PortfolioModel portfolioModel = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioModel, PortfolioModelDto.class);
    }
}
