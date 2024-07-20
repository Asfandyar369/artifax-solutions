package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PortfolioPFPsDto;
import com.artifax_solutions.website.model.PortfolioPFPs;
import com.artifax_solutions.website.repository.PortfolioPFPsRepository;
import com.artifax_solutions.website.service.serviceInterface.PortfolioPFPsService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PortfolioPFPsServiceImpl implements PortfolioPFPsService {
    private final PortfolioPFPsRepository repository;
    private final ModelMapper modelMapper;

    public PortfolioPFPsServiceImpl(PortfolioPFPsRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PortfolioPFPsDto getPortfolioPFPs() {
        PortfolioPFPs portfolioPFPs = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolioPFPs, PortfolioPFPsDto.class);
    }
}
