package com.once.web.controller;

import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Accounts;
import com.once.web.domain.Customers;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.IPredicate;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.CustomersServiceImpl;


@Controller
public class KsaController {
	private static final Logger logger = LoggerFactory.getLogger(KsaController.class);
	
	@Autowired Map<String,Object> map;
	@Autowired Customers ct;
	@Autowired CustomersServiceImpl cust;
	@Autowired Accounts ac;
	@Autowired AccountsServiceImpl acc;
	
	@RequestMapping("/ksa")
	public String ksaMain(Locale locale, Model model) {
		logger.info("김승아 컨트롤 진입 했씁니다!!!");	
		return "ksa";
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = {RequestMethod.POST, RequestMethod.GET})
	public boolean login(@RequestBody Map<String,Object> res) {
		System.out.println("카카오정보 : "+res);
		IPredicate p = (Object o) -> cust.existsCustomerID(res); 
		if(p.test(res.get("id"))) {
			IConsumer c = (Object o) -> cust.registCustomer(res); 
			c.accept(res);
		}
		return p.test(res.get("id"));
	}
	@ResponseBody
	@RequestMapping(value ="/select/{id}", method = RequestMethod.POST)
	public Customers selectInfo(@PathVariable Map<String,Object> id) {
		System.out.println("selectInfo 회원아이디 : "+id);
		IFunction f = (Object o) -> cust.retrieveCustomer(id);
		ct = (Customers) f.apply(id);
		System.out.println("cust정보 : "+ct);
		return ct;
	}
	@ResponseBody
	@RequestMapping(value ="/account/{id}", method = RequestMethod.POST)
	public Accounts openAccount(@PathVariable String id) {
		System.out.println("openAccount 회원아이디 : "+id);
		String account = "";
		for(int i=0; i<13; i++) {
			account += (int)(Math.random()*10);
		}
		map.put("id", id);
		map.put("money", "0");
		map.put("acnum", account);
		IConsumer c = (Object o) -> acc.openAnAccount(map);
		c.accept(map);
		IFunction f = (Object o) -> acc.retrieveAccount(id);
		ac = (Accounts) f.apply(id);
		System.out.println("ac는 : "+ac);
		return ac;
	}
}
