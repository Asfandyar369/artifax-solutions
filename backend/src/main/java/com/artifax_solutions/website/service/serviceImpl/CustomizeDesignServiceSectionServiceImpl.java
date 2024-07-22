package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.CustomizeDesignServiceDto;
import com.artifax_solutions.website.model.CustomizeDesignService;
import com.artifax_solutions.website.repository.CustomizeDesignServiceRepository;
import com.artifax_solutions.website.service.serviceInterface.CustomizeDesignServiceSectionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CustomizeDesignServiceSectionServiceImpl implements CustomizeDesignServiceSectionService {
    private final CustomizeDesignServiceRepository repository;
    private final ModelMapper modelMapper;

    public CustomizeDesignServiceSectionServiceImpl(CustomizeDesignServiceRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CustomizeDesignServiceDto getCustomizeDesignService() {
        CustomizeDesignService customizeDesignService = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(customizeDesignService, CustomizeDesignServiceDto.class);
    }
}
