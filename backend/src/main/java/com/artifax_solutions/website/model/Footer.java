package com.artifax_solutions.website.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Footer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String logoUrl;
    private String logoAltText;
    private String aboutText;
    private String copyrightText;
    private String copyrightLink;
    private String ourPaymentMethods;
    private String paymentMethodsImg;

    @OneToMany(mappedBy = "footer")
    private List<MenuHeading> headingList;
}
