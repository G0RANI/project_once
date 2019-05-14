package com.once.web.controller;

import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.once.web.domain.Accounts;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.service.AccountsServiceImpl;

@Controller
@SessionAttributes({"ctx","css","js","img","csv"})
public class CommonController {
	@Autowired HttpSession session;
	@Autowired HttpServletRequest request;
	@Autowired Accounts ac;
	@Autowired AccountsServiceImpl acc;
	@Autowired Map<String,Object> map;
	
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
	
	@GetMapping("/ksa")
	public String ksaMain(Locale locale, Model model) {
		logger.info("김승아 컨트롤 진입 했씁니다!!!");	
		return "ksa";
	}
    @GetMapping("/kth")
    public String kthMain() {
        logger.info("김태혁 컨트롤 진입 했씁니다!!!");   
        return "kth";
    }
	
	@GetMapping("/payment")
	public String payment(Locale locale, Model model) {
		logger.info("===============테스트 진입===============");
		return "payment";
	}
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value ="/payment/{id}", method = RequestMethod.POST)
	public Accounts payment2(@RequestBody String money
			,@PathVariable String id) {
			logger.info("===============테스트 결제진입===============");
			System.out.println("data 값: "+money);
			IFunction f = (Object o) -> acc.retrieveAccount(id);		  
			Map<String,Object> ls = (Map<String,Object>)f.apply(id);
			int bMoney = Integer.parseInt((String)ls.get("money"));
			int tMoney =  bMoney + Integer.parseInt(money);
			String fMoney = String.valueOf(tMoney);
			map.put("id", id);
			map.put("bm", fMoney);
			IConsumer ii = (Object o) -> acc.modifyBuyAccount(map);
			ii.accept(map);
		return (Accounts) map;
	}
	
}
