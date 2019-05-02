package com.once.web.controller;

import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Customers;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.service.CustomersServiceImpl;


@Controller
public class KsaController {
	private static final Logger logger = LoggerFactory.getLogger(KsaController.class);
	
	@Autowired Map<String,Object> map;
	@Autowired CustomersServiceImpl cust;
	@Autowired Customers ct;
	
	@RequestMapping("/ksa")
	public String ksaMain(Locale locale, Model model) {
		logger.info("김승아 컨트롤 진입 했씁니다!!!");	
		return "ksa";
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = {RequestMethod.POST, RequestMethod.GET})
	public Map<String,Object> login(@RequestBody Map<String, Object> res) {
		System.out.println("카카오정보 : "+res);
		IFunction f = (Object o) -> cust.retrieveCustomer(res); 
		ct = (Customers) f.apply(res.get("id"));
		if(ct == null) {
			IConsumer c = (Object o) -> cust.registCustomer((Map<String, Object>) res); 
			c.accept(res);
		}
		return res;
	}
	
	@PostMapping("/select/{userid}")
	public Customers select_info(@PathVariable Map<String, Object> userid) {
		System.out.println("카카오정보 : "+userid);
		
		return null;
	}
}
