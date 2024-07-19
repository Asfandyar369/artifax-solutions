package com.artifax_solutions.website.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FooterDTO {
    private Long id;
    private String logoUrl;
    private String logoAltText;
    private String aboutText;
    private String copyrightText;
    private String copyrightLink;
    private String ourPaymentMethods;
    private String paymentMethodsImg;
    private String buttonText;
    private String buttonLink;
    private List<MenuHeadingDTO> headingList;
}
