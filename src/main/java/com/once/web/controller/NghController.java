package com.once.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Accounts;
import com.once.web.domain.Customers;
import com.once.web.domain.Once;
import com.once.web.domain.OnceHis;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.ISupplier;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.CustomersServiceImpl;
import com.once.web.service.OnceHisServiceImpl;
import com.once.web.service.OnceServiceImpl;
import com.once.web.service.TransactionsServiceImpl;



@Controller
public class NghController {
	@Autowired Map<String, Object> map;
	@Autowired Once once;
	@Autowired OnceServiceImpl onceimpl;
	@Autowired TransactionsServiceImpl trs;
	@Autowired AccountsServiceImpl asi;
	@Autowired Accounts ac;
	@Autowired OnceHisServiceImpl ohsi;
	@Autowired CustomersServiceImpl custi;
	
	
	private static final Logger logger = LoggerFactory.getLogger(NghController.class);
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		logger.info("남기호 컨트롤 진입 했씁니다!!!");	
		return "ngh";
	}
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping("/ngh/once")
	public Map<String, Object> once() {
		logger.info("원스 코인에 들어왔습니다!!!");
		map.clear();
		OnceHis item = new OnceHis();
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		String date = String.valueOf(dateFormat.format(today));
		System.out.println("날짜의 값 : " + dateFormat.format(today));
		map.clear();
		ISupplier i = ()-> ohsi.selectOnceCount();
		Map<String, Object> ls = (Map<String, Object>) i.get();
		List<OnceHis> list  = new ArrayList<OnceHis>();
		item.setPrice((String) Integer.toString(((int) ls.get("price"))));
		Date dtNormal = GetNormalTime(today); 
		item.setDate(dtNormal);
		list.add(item);
		System.out.println(list);
		map.put("ls", list); 	
		
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/ngh/once/price")
	public Map<String, Object> onceprice() {
		logger.info("원스 코인에 들어왔습니다!!!");
		map.clear();
		ISupplier i = ()-> ohsi.selectprice();
		List<?> ls = (List<?>) i.get();
		map.put("ls", ls); 	
		return map;
	}
	
	@Transactional
	@ResponseBody
	@RequestMapping("/ngh/ch")
	public Map<String, Object>  chart(
			){
		map.clear();
		logger.info("원스차트에 들어왔습니다!!!");
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.MINUTE, -10);
		List<OnceHis> list  = new ArrayList<OnceHis>();
		int price = 1000;
		int min = (int) (price * 0.9);
		int max = (int) (price * 1.1);
		for (int i = 0; i < 60; i++ ) {
			Date date = cal.getTime();
			price = getRandomNumberInRange(min, max);
			OnceHis item = new OnceHis();
			item.setSeq("");
			item.setTseq("");
			item.setCurrentCount("");
			item.setPrice(Integer.toString(price));
			Date dtNormal = GetNormalTime(date); 
			item.setDate(dtNormal);
			list.add(item);
			cal.add(Calendar.SECOND, 10);
			
			min = (int) (price * 0.9);
            max = (int) (price * 1.1);
            
            if (min < 500)
            {
            	min = 500;
            	max = (int) (min * 1.2);
            }
		}
		System.out.println("[list values]" + list);

		map.put("ls", list);
		return map;
	}
	
	int getRandomNumberInRange(int min, int max) {
		if (min >= max) {
			throw new IllegalArgumentException("max must be greater than min");
		}
		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}
	
	Date GetNormalTime(Date tm)
	{
		long lcurTime =  tm.getTime();
		long normalTime = (lcurTime / (10 * 1000)) * (10 * 1000);
		Date curDt =  new Date(normalTime);
		return curDt;
	}
	
	
	@Transactional
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/buy/{unit}/{price}/{id}/{tprice}", method = RequestMethod.GET)
	public Map<String, Object> buy(@PathVariable("unit") String unit,
									@PathVariable("price") String price,
									@PathVariable("id") String id,
									@PathVariable("tprice") String tprice) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		logger.info("매수 매도 에 들어왔습니다!!!");
		System.out.println("받아온값 : "+price);
		map.put("unit", unit);
		map.put("id", id);
		map.put("nprice",price);
		map.put("rw","매수");
		map.put("date",date);
		map.put("tprice",tprice);
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> ls = (Map<String,Object>)f.apply(id);	
		int  money = Integer.parseInt((String)ls.get("money"));
		int curruentMoney =  money - totalPrice;
		String bm = String.valueOf(curruentMoney);
		map.put("bm",bm); 
		IConsumer ii = (Object o) -> asi.modifyBuyAccount(map);
		ii.accept(map); 
		IConsumer i = (Object o) -> trs.modifyTransaction(map);
		i.accept(map); 
		ISupplier s = ()-> ohsi.selectOnceCount();
		s.get();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		System.out.println(olist.get("current_count"));
		int count = (int) olist.get("current_count"); 
		int oncecount = count - onceunit;
		String onprice= String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map.clear();
		map.put("oc", oc);
		map.put("price", onprice);
		OnceHis oh = new OnceHis();
		oh.setPrice(onprice);
		oh.setCurrentCount(oc);;
		IConsumer c = (Object o) -> ohsi.insertOnceCount(oh);
		c.accept(oh);
		System.out.println("id : "+id);
		IFunction ifc = (Object o)-> custi.retrieveCustomer(id);
		Customers custpr = (Customers) ifc.apply(id);
		System.out.println(custpr.getTbprice());
		System.out.println(custpr.getHqua());
		int tbprice = Integer.parseInt(custpr.getTbprice());
		int hqua = Integer.parseInt(custpr.getHqua());
		int tbprices = tbprice + totalPrice;
		int hquas = hqua + onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map.clear();
		map.put("tb", tb);
		map.put("hq", hq);
		map.put("id", id);
		IConsumer cc = (Object o) -> custi.updateCust(map);
		cc.accept(map);
		
		 return map;
	}
	
	int GetPrice(double coinCount)
	{
		double totalunit = 2000000;
		double onceprice = totalunit / coinCount * 1000;
		return (int)onceprice;
	}
	
	@Transactional
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/medo/{unit}/{price}/{id}/{tprice}", method = RequestMethod.GET)
	public Map<String, Object> medo(@PathVariable("unit") String unit,
									@PathVariable("price") String price,
									@PathVariable("id") String id,
									@PathVariable("tprice") String tprice) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		logger.info("매수 매도 에 들어왔습니다!!!");
		System.out.println("받아온값 : "+price);
		System.out.println("1번째 id ::: : : : : : : : "+id);
		map.put("unit", unit);
		map.put("id", id);
		map.put("nprice",price);
		map.put("rw","매도");
		map.put("date",date);
		map.put("tprice",tprice);
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> ls = (Map<String,Object>)f.apply(id);	
		int  money = Integer.parseInt((String)ls.get("money"));
		int curruentMoney =  money + totalPrice;
		String bm = String.valueOf(curruentMoney);
		map.put("bm",bm); 
		IConsumer ii = (Object o) -> asi.modifyBuyAccount(map);
		ii.accept(map); 
		IConsumer i = (Object o) -> trs.modifyTransaction(map);
		i.accept(map); 
		ISupplier s = ()-> ohsi.selectOnceCount();
		s.get();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		System.out.println(olist.get("current_count"));
		int count = (int) olist.get("current_count"); 
		int oncecount = count + onceunit;
		String onprice= String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map.put("oc", oc);
		map.put("price", onprice);
		OnceHis oh = new OnceHis();
		oh.setPrice(onprice);
		oh.setCurrentCount(oc);;
		IConsumer c = (Object o) -> ohsi.insertOnceCount(oh);
		c.accept(oh);
		System.out.println("id : "+id);
		IFunction ifc = (Object o)-> custi.retrieveCustomer(id);
		Customers custpr = (Customers) ifc.apply(id);
		System.out.println(custpr.getTbprice());
		System.out.println(custpr.getHqua());
		int tbprice = Integer.parseInt(custpr.getTbprice());
		int hqua = Integer.parseInt(custpr.getHqua());
		int tbprices = tbprice - totalPrice;
		int hquas = hqua - onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map.put("tb", tb);
		map.put("hq", hq);
		map.put("id", id);
		IConsumer cc = (Object o) -> custi.updateCust(map);
		cc.accept(map);
		
		 return map;
	}
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/mycoin/{id}", method = RequestMethod.GET)
	public Map<String, Object> mycoin(@PathVariable("id") String id){
		System.out.println("my coin메소드 들어왔다요!!!");
		System.out.println("id값 "+id);
		map.clear();
		map.put("id", id);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> rs = (Map<String, Object>) f.apply(id);
		map.put("rs",rs);
		return map;
	}
	
}
