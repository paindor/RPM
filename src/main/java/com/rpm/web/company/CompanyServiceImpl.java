package com.rpm.web.company;

import com.rpm.web.contents.Cars;
import com.rpm.web.contents.CarsRepository;
import com.rpm.web.recommend.Recommend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompanyServiceImpl implements CompanyService{
    @Autowired
    CarsRepository carsRepository;
    public List<Cars> getBestCarList(Recommend recommend) {
        List<Cars> list =new ArrayList<>();
        carsRepository.findByModelnmOrderByPrice(recommend.getModelNm()).forEach(el->{

            if ( list.size()<5&&recommend.getMinPrice() <= el.getPrice() && recommend.getMaxPrice() > el.getPrice()) {
                list.add(el);
            }
        });
        if(list.size()<5){
            carsRepository.findByCategorycd(carsRepository.findFirstByModelnm(recommend.getModelNm()).getCategorycd()).forEach(el->{
                if(list.size()<5){
                    if(recommend.getMinPrice()<el.getPrice()&&recommend.getMaxPrice()>el.getPrice()){
                        list.add(el);
                    }
                }
            });
        }


        return list;
    }
}
