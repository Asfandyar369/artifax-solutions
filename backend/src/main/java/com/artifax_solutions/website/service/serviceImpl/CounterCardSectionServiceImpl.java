package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.CounterCardSectionImageDto;
import com.artifax_solutions.website.model.CounterCardSectionImage;
import com.artifax_solutions.website.repository.CounterCardSectionRepository;
import com.artifax_solutions.website.service.serviceInterface.CounterCardSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CounterCardSectionServiceImpl implements CounterCardSectionService {
    private final CounterCardSectionRepository repository;
    private final ModelMapper modelMapper;

    public CounterCardSectionServiceImpl(CounterCardSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CounterCardSectionImageDto getCounterCards() {
        CounterCardSectionImage counterCardSectionImage = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(counterCardSectionImage, CounterCardSectionImageDto.class);
    }
}
