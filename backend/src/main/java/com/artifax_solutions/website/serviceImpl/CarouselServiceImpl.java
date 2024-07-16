package com.artifax_solutions.website.serviceImpl;

import com.artifax_solutions.website.dto.CarouselDto;
import com.artifax_solutions.website.model.Carousel;
import com.artifax_solutions.website.repository.CarouselRepository;
import com.artifax_solutions.website.serviceInterface.CarouselService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
@Service
public class CarouselServiceImpl implements CarouselService {
    private final CarouselRepository carouselRepository;
    private final ModelMapper modelMapper;

    public CarouselServiceImpl(CarouselRepository carouselRepository, ModelMapper modelMapper) {
        this.carouselRepository = carouselRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CarouselDto getCarousel() {
        Carousel carousel = carouselRepository.findFirstByOrderByIdAsc();
        return modelMapper.map(carousel, CarouselDto.class);
    }
}
