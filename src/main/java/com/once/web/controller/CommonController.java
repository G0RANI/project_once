package com.once.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@GetMapping("/")
	public String home(Locale locale, Model model) {
		logger.info("===============루트 진입===============");
<<<<<<< HEAD
		//test123123123123
=======
		//test 111
>>>>>>> d8f569880484084dfba131122d17a9d505e2089c
		return "index";
	}
}
