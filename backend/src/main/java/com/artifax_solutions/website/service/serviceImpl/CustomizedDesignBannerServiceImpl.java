package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.CustomizedDesignBannerDto;
import com.artifax_solutions.website.model.CustomizedDesignBanner;
import com.artifax_solutions.website.repository.CustomizedDesignBannerRepository;
import com.artifax_solutions.website.service.serviceInterface.CustomizedDesignBannerService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CustomizedDesignBannerServiceImpl implements CustomizedDesignBannerService {
    private final CustomizedDesignBannerRepository repository;
    private final ModelMapper modelMapper;

    public CustomizedDesignBannerServiceImpl(CustomizedDesignBannerRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CustomizedDesignBannerDto getCustomizedDesignBanner() {
        CustomizedDesignBanner customizedDesignBanner = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(customizedDesignBanner, CustomizedDesignBannerDto.class);
    }
}
