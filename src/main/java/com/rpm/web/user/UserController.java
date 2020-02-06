package com.rpm.web.user;

import com.rpm.web.carbook.*;
import com.rpm.web.proxy.Trunk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class UserController {
    @Autowired User user;
    @Autowired UserRepository userRepository;
    @Autowired Carbook carbook;
    @Autowired CarbookRepository carbookRepository;
    @Autowired Record record;
    @Autowired CarbookService carbookService;
    @Autowired UserService userService;
    @Autowired
    Trunk trunk;



    @GetMapping("/idCheck/{userid}")
    public Boolean idCheck(@PathVariable String userid){
        return userRepository.findByUserid(userid)==null;
    }

    @PostMapping("/join")
    public HashMap<String, Object> join(@RequestBody User param){
        trunk.clear();
        userRepository.save(param);
        if (user != null) {
            trunk.put(Arrays.asList("msg", "user"), Arrays.asList(true, user));

        } else {
            trunk.put(Arrays.asList("msg"), Arrays.asList(false));

        }
        return trunk.get();
    }
    @PostMapping("/login")
    public HashMap<String, Object> login(@RequestBody User param) {
        trunk.clear();
        user = userRepository.findByUseridAndPasswd(param.getUserid(), param.getPasswd());

        if (user != null) {
            trunk.put(Arrays.asList("token", "user","result"), Arrays.asList(user.getUserSeq(), user, true));


        } else {
            trunk.put(Arrays.asList("result"), Arrays.asList(false));

        }

        return trunk.get();
    }
    @PostMapping("/getUserInfo/{token}")
    public HashMap<String, Object> getUserInfo(@PathVariable String token){
        user = userRepository.findByUserSeq(Integer.parseInt(token));
        if(user != null){
            trunk.put(Arrays.asList("result" , "user") , Arrays.asList(true, user));

        }else{
            trunk.put(Arrays.asList("result" ) , Arrays.asList(false));

        }
        return trunk.get();
    }
    @PostMapping("update")
    public HashMap<String, Object> update( @RequestBody User user){
        HashMap<String, Object> map = new HashMap<>();
        map.put("user", userService.update(user));
        map.put("msg", "success");
        return map;
    }
    @GetMapping("withDrawl/{userid}")
    public String withDrawl(@PathVariable String userid){
        userService.withDrawl(userid);
        return "success";
    }

}
