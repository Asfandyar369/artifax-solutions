package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.dto.FooterDTO;
import com.artifax_solutions.website.model.Footer;
import com.artifax_solutions.website.repository.FooterRepository;
import com.artifax_solutions.website.service.serviceInterface.FooterService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class FooterServiceImpl implements FooterService {
    private final FooterRepository repository;
    private final ModelMapper modelMapper;

    public FooterServiceImpl(FooterRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public FooterDTO getFooter() {
        Footer footer = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(footer, FooterDTO.class);
    }
}
