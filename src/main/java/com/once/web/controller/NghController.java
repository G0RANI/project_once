package com.once.web.controller;

import java.util.Locale;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
public class NghController {
	
	private static final Logger logger = LoggerFactory.getLogger(NghController.class);
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		logger.info("남기호 컨트롤 진입 했씁니다!!!");	
		return "ngh";
	}
	
	@ResponseBody
	@RequestMapping("/ngh/once")
	public String once() {
		logger.info("원스 코인에 들어왔습니다!!!");	
	
		return null;
	}
	/*
	 * public static void main(String[] args) { Random rand = new Random(); Timer
	 * timer = new Timer(); TimerTask task = new TimerTask() {
	 * 
	 * @Override public void run() { for (int i = 0; i <= 20; i++) {
	 * System.out.println(rand.nextInt(9990)+100); } } }; timer.schedule(task,5000);
	 * 
	 * }
	 */
}
