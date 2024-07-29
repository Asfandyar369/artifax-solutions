// src/main/java/com/artifax_solutions/website/service/serviceImpl/GooglePlacesServiceImpl.java

package com.artifax_solutions.website.service.serviceImpl;

import com.artifax_solutions.website.service.serviceInterface.GooglePlacesService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@Service
public class GooglePlacesServiceImpl implements GooglePlacesService {
    @Value("${google.api.key}")
    private String googleApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public Map<String, Object> getPlaceDetails(String placeId) {
        String url = UriComponentsBuilder.fromHttpUrl("https://maps.googleapis.com/maps/api/place/details/json")
                .queryParam("place_id", placeId)
                .queryParam("key", googleApiKey)
                .toUriString();

        // Use ParameterizedTypeReference to specify the expected response type
        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Map<String, Object>>() {}
        );

        return response.getBody();
    }
}
