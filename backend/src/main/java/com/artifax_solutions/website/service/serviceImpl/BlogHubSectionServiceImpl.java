package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.service.serviceInterface.BlogHubSectionService;
import com.artifax_solutions.website.dto.BlogHubSectionDto;
import com.artifax_solutions.website.model.BlogHubSection;
import com.artifax_solutions.website.repository.BlogHubSectionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class BlogHubSectionServiceImpl implements BlogHubSectionService {
    private final BlogHubSectionRepository repository;
    private final ModelMapper modelMapper;

    public BlogHubSectionServiceImpl(BlogHubSectionRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public BlogHubSectionDto getBlogHubSection() {
        BlogHubSection blogHubSection = repository.findFirstByOrderByIdAsc();
        return modelMapper.map(blogHubSection, BlogHubSectionDto.class);
    }
}
