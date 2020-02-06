package com.rpm.web.carbook;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarbookRepository extends CrudRepository<Carbook, Long> {

    @Query(value = "SELECT * FROM MYCAR INNER JOIN USER ON MYCAR.USER_SEQ = USER.USERSEQ WHERE USER_SEQ =:userSeq",
    nativeQuery = true)
    public Carbook findBySeq(long userSeq);

    public Carbook findByMycarId(long mycarId);


}
