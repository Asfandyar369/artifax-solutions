package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.StreamerFeatureDto;
import com.artifax_solutions.website.model.StreamerFeature;
import com.artifax_solutions.website.repository.StreamerFeatureRepository;
import com.artifax_solutions.website.Service.serviceInterface.StreamerFeatureService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StreamerFeatureServiceImpl implements StreamerFeatureService {
    private final StreamerFeatureRepository repository;
    private final ModelMapper modelMapper;

    public StreamerFeatureServiceImpl(StreamerFeatureRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public StreamerFeatureDto getFeature() {
        StreamerFeature streamerFeature = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(streamerFeature, StreamerFeatureDto.class);
    }
}
