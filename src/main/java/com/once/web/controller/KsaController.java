package com.once.web.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.once.web.domain.Accounts;
import com.once.web.domain.Customers;
import com.once.web.domain.Transactions;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.IPredicate;
import com.once.web.lambda.ISupplier;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.CustomersServiceImpl;
import com.once.web.service.TransactionsServiceImpl;


@RestController
public class KsaController {
	private static final Logger logger = LoggerFactory.getLogger(KsaController.class);
	@Autowired Map<String,Object> map;
	@Autowired Customers ct;
	@Autowired CustomersServiceImpl cust;
	@Autowired Accounts ac;
	@Autowired AccountsServiceImpl acc;
	@Autowired Transactions tr;
	@Autowired TransactionsServiceImpl trx;
	
	@Transactional
	@PostMapping("/login")
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
	@PostMapping("/retrieve_acc/{id}")
	public Map<String,Object> selectAccountInfo(@PathVariable String id) {
		System.out.println("selectAccountInfo 회원아이디 : "+id);
		IFunction f = (Object o) -> acc.retrieveAccount(id);
		System.out.println("selectAccountInfo  : "+f.apply(id));
		return (Map<String, Object>) f.apply(id);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	@PostMapping("/open_acc/{id}")
	public Map<String,Object> openAccount(@PathVariable String id) {
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
		return  (Map<String, Object>) f.apply(id);
	}
	
	@PostMapping("/retrieve_cust/{id}")
	public Customers selectCustomer(@PathVariable String id) {
		System.out.println("selectCustomer 회원아이디 : "+id);
		IFunction f = (Object o) -> cust.retrieveCustomer(id);
		System.out.println(f.apply(id));
		return  (Customers) f.apply(id);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/retrieve_trx/{id}")
	public Map<String,Object> selectTransactions(@PathVariable String id) {
		System.out.println("selectTransactions 회원아이디 : "+id);
		IFunction f = (Object o) -> trx.retrieveAllTransactions(id);
		List<Transactions> l = (List<Transactions>) f.apply(id);
		map.clear();
		map.put("ls", l);
		return map;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/retrieve_all_trx")
	public Map<String,Object> selectAlltrx() {
		System.out.println("selectAlltrx 진입");
		ISupplier s = () -> trx.retrieveAllTrx();
		System.out.println("s.get()은?? "+s.get());
		List<Transactions> l = (List<Transactions>) s.get();
		map.clear();
		map.put("ls", l);
		System.out.println("map은?? "+map);
		return map;
	}
	
	@PostMapping("/payment")
	public Accounts payment2(@RequestBody Map<String, Object> data) {
		logger.info("===============테스트 진입===============");
		System.out.println("data 값: "+data);
		IConsumer c = (Object o) -> acc.modifyBuyAccount(data);
		c.accept(data);
		IFunction f = (Object o) -> acc.retrieveAccount(String.valueOf(data.get("id")));
		ac=(Accounts) f.apply(data);
		return ac;
	}
}
