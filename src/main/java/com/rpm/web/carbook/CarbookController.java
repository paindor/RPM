package com.rpm.web.carbook;

import com.rpm.web.proxy.Box;
import com.rpm.web.proxy.Trunk;
import com.rpm.web.user.User;
import com.rpm.web.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class CarbookController {
    @Autowired CarbookRepository carbookRepository;
    @Autowired User user;
    @Autowired Carbook carbook;
    @Autowired Record record;
    @Autowired CarbookService carbookService;
    @Autowired RecordRepository recordRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    Box box;

    @Autowired
    Trunk trunk;

    @PostMapping("/uploadCar")
    public String uploadCar( MultipartHttpServletRequest req){
        System.out.println("interh upload");
        Iterator<String> itr =req.getFileNames();
        String filename = itr.next();
        MultipartFile mfile = req.getFile(filename);
        String origName = mfile.getOriginalFilename();
        String path = "C:\\last_RPM\\src\\main\\resources\\static\\img\\mycar\\";
        File dir = new File(path);
        if(!dir.exists()){
            dir.mkdir();
        }
        String extension = origName.substring(origName.lastIndexOf(".")+1);
        filename = UUID.randomUUID().toString() +"."+extension;


        File serverFile = new File(path +  filename);
        box.add(filename);

        try {
            mfile.transferTo(serverFile);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;

    }


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

        carbook = carbookRepository.findByMycarId(Long.parseLong(mecar));
        if(carbook != null){

                record.builder().date(param.getDate()).serviceCode(param.getServiceCode()).price(param.getPrice())
                        .detail(param.getDetail()).build();
                record.setMycarId(carbook);
                record.setServiceCode(param.getServiceCode());
                record.setPrice(param.getPrice());
                record.setDetail(param.getDetail());
                record.setDate(param.getDate());


            record = recordRepository.save(record);
                if(record !=null){
                    trunk.put(Arrays.asList("result", "rec" ), Arrays.asList(true, record ));

                }else{
                    trunk.put(Arrays.asList("result" ), Arrays.asList(false));

                }

        }else{
            trunk.put(Arrays.asList("result"), Arrays.asList(false));
        }
        return trunk.get();
    }
    @DeleteMapping("/deleteRecord/{id}/{mecar}")
    public HashMap<String, Object> delRecord(@PathVariable String id,
                                             @PathVariable String mecar){

        trunk.clear();
        carbook = carbookRepository.findByMycarId(Long.parseLong(mecar));
        Iterable<Record> before = carbookService.getRecords(carbook.getMycarId());
        recordRepository.delete(recordRepository.findByRecordId(Long.parseLong(id)));
        Iterable<Record> after = carbookService.getRecords(carbook.getMycarId());


       if(before.equals(after)){
           trunk.put(Arrays.asList("result" ), Arrays.asList(false ));

       }else{
           List<Record> listAfter = new ArrayList<>();
           for(Record r : before){
               listAfter.add(r);

           }
           trunk.put(Arrays.asList("result", "record" ), Arrays.asList(true, listAfter));

       }

        return trunk.get();

    }
    @PostMapping("/registMycar/{userid}")
    public HashMap<String, Object> createMycar(@RequestBody Carbook param, @PathVariable String userid){
        user = userRepository.findByUserid(userid);
        trunk.clear();
        System.out.println(user.toString());
        System.out.println(param.toString());
        carbook = carbookRepository.findBySeq(user.getUserSeq());
        if(carbook != null){
            carbookRepository.delete(carbook);

        }

        param.setUserSeq(user);
        String img = param.getCarImg();
        param.setCarImg("img" +File.separator +"mycar" +File.separator + box.get(0));
        carbook = carbookRepository.save(param);
        trunk.put(Arrays.asList("mycar"), Arrays.asList(carbook));

       return trunk.get();


    }



}
