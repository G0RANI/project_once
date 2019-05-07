package com.once.web.controller;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Once;
import com.once.web.lambda.IFunction;
import com.once.web.service.OnceServiceImpl;



@Controller
public class NghController {
	@Autowired Map<String, Object> map;
	@Autowired Once once;
	@Autowired OnceServiceImpl onceimpl;
	
	
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
		  Random rand = new Random(); 
		  System.out.println(rand.nextInt(1200)+1000); 
		  map.clear();
		  int ls =  rand.nextInt(1200)+1000;
		  map.put("ls",ls);
		  return map;
	}
	@ResponseBody
	@RequestMapping("/ngh/chart/{seq}")
	public Once chart(
			@PathVariable String seq){
		 logger.info("원스차트에 들어왔습니다!!!");
		 once = new Once();
		 once.setOseq(seq);
		 IFunction i = (Object o)-> onceimpl.selectOnce(once);
		 once = (Once) i.apply(once);
		 System.out.println("원스 값 : "+once.toString());		 
		 return once;
	}
}
