package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.Portfolio3DSceneDto;
import com.artifax_solutions.website.model.Portfolio3DScene;
import com.artifax_solutions.website.repository.Portfolio3DSceneRepository;
import com.artifax_solutions.website.service.serviceInterface.Portfolio3DSceneService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class Portfolio3DSceneServiceImpl implements Portfolio3DSceneService {
    private final Portfolio3DSceneRepository repository;
    private final ModelMapper modelMapper;

    public Portfolio3DSceneServiceImpl(Portfolio3DSceneRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Portfolio3DSceneDto getPortfolio3DScene() {
        Portfolio3DScene portfolio3DScene = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(portfolio3DScene, Portfolio3DSceneDto.class);
    }
}
