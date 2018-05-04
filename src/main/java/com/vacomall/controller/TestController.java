package com.vacomall.controller;

import com.vacomall.common.controller.SuperController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class TestController extends SuperController {

    @RequestMapping
    public String test(){
        return "front/paper";
    }

}

