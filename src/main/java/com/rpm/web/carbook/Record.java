package com.rpm.web.carbook;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Component
@Entity
@Getter
@ToString
@Setter
@NoArgsConstructor
@Lazy
@Table(name="RECORD")
public class Record  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull @Column(name = "RECORDID") private Long recordId;
    @Column(name = "DATE") private String date;
    @Column(name = "SERVICECODE") private String serviceCode;
    @Column(name = "DETAIL") private String detail;
    @Column(name = "PRICE") private String price;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mycarId")
    private Carbook mycarId;



    @Builder
    public Record(String date, String serviceCode, String detail,
                String price) {
        this.date = date;
        this.serviceCode = serviceCode;
        this.detail = detail;
        this.price = price;

    }
}
