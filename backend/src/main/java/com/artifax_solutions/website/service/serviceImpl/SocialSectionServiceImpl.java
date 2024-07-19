package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.SocialSectionDto;
import com.artifax_solutions.website.model.SocialSection;
import com.artifax_solutions.website.repository.SocialSectionRepository;
import com.artifax_solutions.website.service.serviceInterface.SocialSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class SocialSectionServiceImpl implements SocialSectionService {
    private final SocialSectionRepository repository;
    private final ModelMapper modelMapper;

    public SocialSectionServiceImpl(SocialSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public SocialSectionDto getSocialSection() {
        SocialSection socialSection = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(socialSection, SocialSectionDto.class);
    }
}
