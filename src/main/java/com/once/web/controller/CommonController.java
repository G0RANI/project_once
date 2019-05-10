package com.once.web.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes({"ctx","css","js","img","csv"})
public class CommonController {
	@Autowired HttpSession session;
	@Autowired HttpServletRequest request;
	
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@GetMapping("/")
	public String home(Locale locale, Model model) {
		logger.info("================루트 진입===============");
		String ctx = request.getContextPath();
		session.setAttribute("ctx", ctx);
		session.setAttribute("css", ctx + "/resources/css/");
		session.setAttribute("js", ctx + "/resources/js/");
		session.setAttribute("img", ctx + "/resources/img/");
		session.setAttribute("csv", ctx + "/resources/csv/");
		return "index";
	}
}
