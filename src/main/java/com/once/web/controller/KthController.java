package com.once.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class KthController {
	
	private static final Logger logger = LoggerFactory.getLogger(KthController.class);
	@RequestMapping("/kth")
	public String kthMain(Locale locale, Model model) {
		logger.info("김태혁 컨트롤 진입 했씁니다!!!");	
		return "kth";
	}
	
}
