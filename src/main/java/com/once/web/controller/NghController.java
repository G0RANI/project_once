package com.once.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Once;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.ISupplier;
import com.once.web.service.OnceServiceImpl;
import com.once.web.service.TransactionsServiceImpl;



@Controller
public class NghController {
	@Autowired Map<String, Object> map;
	@Autowired Once once;
	@Autowired OnceServiceImpl onceimpl;
	@Autowired TransactionsServiceImpl trs;
	
	private static final Logger logger = LoggerFactory.getLogger(NghController.class);
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		logger.info("남기호 컨트롤 진입 했씁니다!!!");	
		return "ngh";
	}
	@ResponseBody
	@RequestMapping("/ngh/once")
	public Map<String, Object> once() {
		logger.info("원스 코인에 들어왔습니다!!!");
		  map.clear();
		  ISupplier i = ()-> onceimpl.selectPrice();
		  List<?> ls = (List<?>) i.get();
		  System.out.println("ls 의 값 : "+ls);
		  map.put("ls", ls);
		  return map;
	}
	@ResponseBody
	@RequestMapping("/ngh/ch")
	public Map<String, Object>  chart(
			){
		logger.info("원스차트에 들어왔습니다!!!");
		once = new Once();
		map.clear();
		IFunction i = (Object o) -> onceimpl.selectAllOnceList(); 
		List<?> ls = (List<?>) i.apply(once);
		System.out.println(ls.toString());
		System.out.println("원스에 값"+i.apply(once).toString());
		map.put("ls", ls);
		 return map;
	}
	@ResponseBody
	@RequestMapping(value = "/ngh/buy/{unit}/{price}/{id}", method = RequestMethod.GET)
	public Map<String, Object> buy(@PathVariable("unit") String unit,
									@PathVariable("price") String price,
									@PathVariable("id") String id) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		logger.info("매수 매도 에 들어왔습니다!!!");
		System.out.println("받아온값 : "+price);
		map.clear();
		map.put("unit", unit);
		map.put("id", id);
		map.put("nprice",price);
		map.put("rw","input");
		map.put("date",date);
		IConsumer i = (Object o) -> trs.modifyTransaction(map);
		i.accept(map);
		System.out.println("map 값 : "+map);	
		
	
		
		  return map;
	}
}
