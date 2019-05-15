package com.once.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.once.web.domain.Accounts;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.TransactionsServiceImpl;

@Controller
@SessionAttributes({"ctx","css","js","img","csv"})
public class CommonController {
	@Autowired HttpSession session;
	@Autowired HttpServletRequest request;
	@Autowired Map<String,Object> map;
	@Autowired AccountsServiceImpl acc;
	@Autowired TransactionsServiceImpl trs;

	
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@GetMapping("/")
	public String home(Locale locale, Model model) {
		String ctx = request.getContextPath();
		session.setAttribute("ctx", ctx);
		session.setAttribute("css", ctx + "/resources/css/");
		session.setAttribute("js", ctx + "/resources/js/");
		session.setAttribute("img", ctx + "/resources/img/");
		session.setAttribute("csv", ctx + "/resources/csv/");
		return "index";
	}
	
	@GetMapping("/ksa")
	public String ksaMain(Locale locale, Model model) {
		return "ksa";
	}
    @GetMapping("/kth")
    public String kthMain() {
        return "kth";
    }
	
	@GetMapping("/payment")
	public String payment(Locale locale, Model model) {
		return "payment";
	}
	
	@Transactional
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value ="/payment/{id}", method = RequestMethod.POST)
	public Map<String,Object> payment2(@RequestBody String money
			,@PathVariable String id) {
			Date today = new Date();
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			System.out.println("data 값: "+money);
			IFunction f = (Object o) -> acc.retrieveAccount(id);		  
			Map<String,Object> ls = (Map<String,Object>)f.apply(id);
			int bMoney = Integer.parseInt((String)ls.get("money"));
			int tMoney =  bMoney + Integer.parseInt(money);
			String fMoney = String.valueOf(tMoney);
			String date = String.valueOf(dateFormat.format(today));
			map.put("id", id);
			map.put("bm", fMoney);
			map.put("unit", "0");
			map.put("nprice","0");
			map.put("date",date);
			map.put("tprice","0");
			map.put("dmoney",money);
			map.put("money", money);
			IConsumer ii = (Object o) -> acc.modifyBuyAccount(map);
			ii.accept(map);
			map.put("rw","입금");
			IConsumer i = (Object o) -> trs.modifyTransaction(map);
			i.accept(map); 
		return map;
	}
}
