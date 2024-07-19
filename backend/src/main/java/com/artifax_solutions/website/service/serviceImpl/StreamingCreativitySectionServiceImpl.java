package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.StreamingCreativitySectionDto;
import com.artifax_solutions.website.model.StreamingCreativitySection;
import com.artifax_solutions.website.repository.StreamingCreativitySectionRepository;
import com.artifax_solutions.website.service.serviceInterface.StreamingCreativitySectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StreamingCreativitySectionServiceImpl implements StreamingCreativitySectionService {
    private final StreamingCreativitySectionRepository repository;
    private final ModelMapper modelMapper;

    public StreamingCreativitySectionServiceImpl(
            StreamingCreativitySectionRepository repository, ModelMapper modelMapper
    ) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public StreamingCreativitySectionDto getStreamingCreativitySection() {
        StreamingCreativitySection section = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(section, StreamingCreativitySectionDto.class);
    }
}
