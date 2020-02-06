package com.rpm.web.contents;


import org.springframework.context.annotation.Lazy;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Lazy
public interface CarsRepository extends CrudRepository<Cars, Long> {

    public List<Cars> findByMakenm(String makenm);
    public List<Cars> findByModelGrpNm(String modelGrpNm);
    public List<Cars> findByCenterCode(String centerCode);
    public List<Cars> findByModelnmText(String ModelnmText);
    public Cars findByCarcd(String carcd);
    public List<Cars> findByModelnmOrderByPrice(String mondelnm);
    public List<Cars> findByCategorycd(String categorycd);
    public Cars  findFirstByModelnm(String modelnm);


}
