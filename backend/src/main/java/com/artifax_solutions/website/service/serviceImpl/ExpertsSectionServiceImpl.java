package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.ExpertsSectionDto;
import com.artifax_solutions.website.model.ExpertsSection;
import com.artifax_solutions.website.repository.ExpertsSectionRepository;
import com.artifax_solutions.website.service.serviceInterface.ExpertsSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ExpertsSectionServiceImpl implements ExpertsSectionService {
    private final ExpertsSectionRepository repository;
    private final ModelMapper modelMapper;

    public ExpertsSectionServiceImpl(ExpertsSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ExpertsSectionDto getExpertsSection() {
        ExpertsSection expertsSection = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(expertsSection, ExpertsSectionDto.class);
    }
}
