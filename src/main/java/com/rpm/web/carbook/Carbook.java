package com.rpm.web.carbook;

import com.rpm.web.user.User;
import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Component
@Lazy
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="MYCAR")
public class Carbook implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MYCARID")  @NotNull  private Long mycarId;
    @Column(name = "BRAND")   private String brand;
    @Column(name = "MODEL")  private String model;
    @Column(name = "YEAR")   private String year;
    @Column(name = "MONTH")   private String month;
    @Column(name = "DISTANCE")   private String distance;
    @Column(name = "FUELTYPE") private String fuelType;
    @Column(name = "CARIMG") private String carImg;


    @OneToOne
    @JoinColumn(name = "userSeq")
    private User userSeq;

    @Builder
    public Carbook(String brand, String model, String year,
                   String month, String distance, String fuelType) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.month = month;
        this.distance = distance;
        this.fuelType = fuelType;

    }
}
