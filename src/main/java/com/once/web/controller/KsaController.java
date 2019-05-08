package com.once.web.controller;

import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Accounts;
import com.once.web.domain.Customers;
import com.once.web.domain.Transactions;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.IPredicate;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.CustomersServiceImpl;
import com.once.web.service.TransactionsServiceImpl;


@Controller
public class KsaController {
	private static final Logger logger = LoggerFactory.getLogger(KsaController.class);
	@Autowired Map<String,Object> map;
	@Autowired Customers ct;
	@Autowired CustomersServiceImpl cust;
	@Autowired Accounts ac;
	@Autowired AccountsServiceImpl acc;
	@Autowired Transactions tr;
	@Autowired TransactionsServiceImpl trx;
	
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

	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value ="/retrieve_acc/{id}", method = RequestMethod.POST)
	public Map<String,Object> selectAccountInfo(@PathVariable String id) {
		System.out.println("selectAccountInfo 회원아이디 : "+id);
		IFunction f = (Object o) -> acc.retrieveAccount(id);
		return (Map<String, Object>) f.apply(id);
	}
	
	@ResponseBody
	@RequestMapping(value ="/open_acc/{id}", method = RequestMethod.POST)
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
	
	@ResponseBody
	@RequestMapping(value ="/retrieve_cust/{id}", method = RequestMethod.POST)
	public Customers selectCustomer(@PathVariable String id) {
		System.out.println("selectCustomer 회원아이디 : "+id);
		IFunction f = (Object o) -> cust.retrieveCustomer(id);
		System.out.println(f.apply(id));
		return  (Customers) f.apply(id);
	}
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value ="/retrieve_trx/{id}", method = RequestMethod.POST)
	public Map<String,Object> selectTransactions(@PathVariable String id) {
		System.out.println("selectTransactions 회원아이디 : "+id);
		IFunction f = (Object o) -> trx.retrieveAllTransactions(id);
		System.out.println(f.apply(id));
		return (Map<String, Object>) f.apply(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public Customers search(@RequestBody Map<String,Object> res) {
		System.out.println("search word : "+res);
		IFunction f = (Object o) -> cust.searchCoin(res); 
		return (Customers) f.apply(res);
	}
	
	@GetMapping("/payment")
	public String payment(Locale locale, Model model) {
		logger.info("===============테스트 진입===============");
		return "payment";
	}
}
