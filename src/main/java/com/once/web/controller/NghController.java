package com.once.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class NghController {
	
	private static final Logger logger = LoggerFactory.getLogger(NghController.class);
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		logger.info("남기호 컨트롤 진입 했씁니다!!!");	
		return "ngh";
	}
	@RequestMapping("/ngh/once")
	public String once() {
		logger.info("원스 코인에 들어왔습니다!!!");	
		
	return "";	
	}
}
