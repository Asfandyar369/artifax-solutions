package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.StreamerSectionDto;
import com.artifax_solutions.website.model.StreamerSection;
import com.artifax_solutions.website.repository.StreamerSectionRepository;
import com.artifax_solutions.website.serviceInterface.StreamerSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StreamerSectionServiceImpl implements StreamerSectionService {
    private final StreamerSectionRepository repository;
    private final ModelMapper modelMapper;

    public StreamerSectionServiceImpl(StreamerSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public StreamerSectionDto getStreamerSection() {
        StreamerSection streamerSection = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(streamerSection, StreamerSectionDto.class);
    }
}
