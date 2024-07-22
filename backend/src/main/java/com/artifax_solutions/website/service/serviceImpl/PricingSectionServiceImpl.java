package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.PricingDto;
import com.artifax_solutions.website.model.Pricing;
import com.artifax_solutions.website.repository.PricingRepository;
import com.artifax_solutions.website.service.serviceInterface.PricingSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PricingSectionServiceImpl implements PricingSectionService {
    private final PricingRepository repository;
    private final ModelMapper modelMapper;

    public PricingSectionServiceImpl(PricingRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PricingDto getPricing() {
        Pricing pricing = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(pricing, PricingDto.class);
    }
}
