package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.AcquireSectionDto;
import com.artifax_solutions.website.model.AcquireSection;
import com.artifax_solutions.website.repository.AcquireSectionRepository;
import com.artifax_solutions.website.service.serviceInterface.AcquireSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class AcquireSectionServiceImpl implements AcquireSectionService {
    private final AcquireSectionRepository repository;
    private final ModelMapper modelMapper;

    public AcquireSectionServiceImpl(AcquireSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public AcquireSectionDto getAcquireSection() {
        AcquireSection acquireSection = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(acquireSection, AcquireSectionDto.class);
    }
}
