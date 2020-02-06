package com.rpm.web.carbook;

import com.rpm.web.proxy.Trunk;
import com.rpm.web.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class CarbookController {
    @Autowired CarbookRepository carbookRepository;
    @Autowired Carbook carbook;
    @Autowired Record record;
    @Autowired CarbookService carbookService;
    @Autowired RecordRepository recordRepository;
    @Autowired
    Trunk trunk;



    @PostMapping("/getMycar")
    public HashMap<String, Object> getMycar(@RequestBody User param){
        trunk.clear();
        if(param.getUserid()!=null){
            carbook = carbookRepository.findBySeq(param.getUserSeq());

            if(carbook != null){
                trunk.put(Arrays.asList("result", "mycar"), Arrays.asList(true, carbook));

                List<Record> records = new ArrayList<>();
                records =  carbookService.getRecords(carbook.getMycarId());

                if(records !=null){

                    trunk.put(Arrays.asList("record"), Arrays.asList(records));


                }
                return trunk.get();


            }
        }

        trunk.put(Arrays.asList("result"), Arrays.asList(false));
        return trunk.get();

    }
    @PostMapping("/getRecord")
    public HashMap<String, Object> getRecord(@RequestBody Carbook param){
        Iterable<Record> records = carbookService.getRecords(param.getMycarId());

        List<Record> list = new ArrayList<>();
        for(Record r : records){
            list.add(r);

        }
        if(list != null){
            trunk.put(Arrays.asList("result", "record"), Arrays.asList(true, records));
            return trunk.get();


        }
        trunk.put(Arrays.asList("result"), Arrays.asList(false));

        return trunk.get();
    }
    @PostMapping("/insertRecord/{mecar}")
    public HashMap<String, Object> addRecord(@RequestBody Record param, @PathVariable String mecar){
        trunk.clear();
        System.out.println("in the insert");
        System.out.println(param.toString());
        System.out.println("in the insert" + " " + mecar.toString());
        carbook = carbookRepository.findByMycarId(Long.parseLong(mecar));



        if(carbook != null){
            System.out.println(carbook.toString());
            try{
                record.builder().date(param.getDate()).serviceCode(param.getServiceCode()).price(param.getPrice())
                        .detail(param.getDetail()).build();
                record.setMycarId(carbook);
                record.setServiceCode(param.getServiceCode());
                record.setPrice(param.getPrice());
                record.setDetail(param.getDetail());
                record.setDate(param.getDate());

                record = recordRepository.save(record);
                System.out.println("what? " + record.toString());



            }catch (Exception e){
                e.printStackTrace();
                return null;
            }
            Iterable<Record> itRecord =  carbookService.getRecords(carbook.getMycarId());
            List<Record> records = new ArrayList<>();
            for(Record r : itRecord){
                records.add(r);
            }
            trunk.put(Arrays.asList("result", "rec", "record"), Arrays.asList(true, record, records ));





        }else{
            trunk.put(Arrays.asList("result"), Arrays.asList(false));
        }






        return trunk.get();
    }
    @GetMapping("/deleteRecord")
    public HashMap<String, Object> delRecord(@PathVariable String recoId){


        HashMap<String, Object> map = new HashMap<>();
        long id = Long.parseLong(recoId);
        recordRepository.deleteRecordByRecordId(id);
        return map;

    }



}
