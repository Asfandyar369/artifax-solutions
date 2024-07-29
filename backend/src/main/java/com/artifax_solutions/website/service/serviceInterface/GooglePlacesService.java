package com.artifax_solutions.website.service.serviceInterface;

import java.util.Map;

public interface GooglePlacesService {
    Map<String, Object> getPlaceDetails(String placeId);
}
