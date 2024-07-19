package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.BuildStreamSectionDto;
import com.artifax_solutions.website.model.BuildStreamSection;
import com.artifax_solutions.website.repository.BuildStreamSectionRepository;
import com.artifax_solutions.website.service.serviceInterface.BuildStreamSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BuildStreamSectionServiceImpl implements BuildStreamSectionService {
    private final BuildStreamSectionRepository repository;
    private final ModelMapper modelMapper;

    public BuildStreamSectionServiceImpl(BuildStreamSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public BuildStreamSectionDto getBuildStreamSection() {
        BuildStreamSection section = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(section, BuildStreamSectionDto.class);
    }
}
