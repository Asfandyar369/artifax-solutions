package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.OurServiceDto;
import com.artifax_solutions.website.model.OurService;
import com.artifax_solutions.website.repository.OurServiceRepository;
import com.artifax_solutions.website.service.serviceInterface.OurServiceSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class OurServiceSectionServiceImpl implements OurServiceSectionService {
    private final OurServiceRepository repository;
    private final ModelMapper modelMapper;

    public OurServiceSectionServiceImpl(OurServiceRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public OurServiceDto getOurService() {
        OurService ourService = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(ourService, OurServiceDto.class);
    }
}
