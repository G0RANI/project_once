package com.once.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
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
	@Autowired Map<String, Object> map2;
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
		return "ngh";
	}
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping("/ngh/once")
	public Map<String, Object> once() {
		map.clear();
		OnceHis item = new OnceHis();
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		map.clear();
		ISupplier i = ()-> ohsi.selectOnceCount();
		Map<String, Object> ls = (Map<String, Object>) i.get();
		List<OnceHis> list  = new ArrayList<OnceHis>();
		item.setPrice((String) Integer.toString(((int) ls.get("price"))));
		Date dtNormal = GetNormalTime(today); 
		item.setDate(dtNormal);
		list.add(item);
		map.put("ls", list); 	
		
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/ngh/once/price")
	public Map<String, Object> onceprice() {
		map.clear();
		ISupplier i = ()-> ohsi.selectprice();
		List<?> ls = (List<?>) i.get();
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		map.put("date", dateFormat.format(today));
		map.put("ls", ls); 	
		return map;
	}
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping("/ngh/once/oncechart")
	public Map<String, Object> oncechart() {
		map.clear();
		ISupplier i = ()-> ohsi.selectAllList();
		List<OnceHis> ls = (List<OnceHis>) i.get();
		map.put("ls", ls); 	
		return map;
	}
	
	@Transactional
	@ResponseBody
	@RequestMapping("/ngh/ch")
	public Map<String, Object>  chart(
			){
		map.clear();
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
		map2.clear();
		map2.put("unit", unit);
		map2.put("id", id);
		map2.put("nprice",price);
		map2.put("rw","매수");
		map2.put("date",date);
		map2.put("tprice",tprice);
		map2.put("dmoney","0");
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> ls = (Map<String,Object>)f.apply(id);	
		int  money = Integer.parseInt((String)ls.get("money"));
		int curruentMoney =  money - totalPrice;
		String bm = String.valueOf(curruentMoney);
		map2.put("bm",bm); 
		IConsumer ii = (Object o) -> asi.modifyBuyAccount(map2);
		ii.accept(map2); 
		IConsumer i = (Object o) -> trs.modifyTransaction(map2);
		i.accept(map2); 
		ISupplier s = ()-> ohsi.selectOnceCount();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		int count = (int) olist.get("currentCount"); 
		int oncecount = count - onceunit;
		String onprice= String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map2.clear();
		map2.put("oc", oc);
		map2.put("price", onprice);
		OnceHis oh = new OnceHis();
		oh.setPrice(onprice);
		oh.setCurrentCount(oc);;
		IConsumer c = (Object o) -> ohsi.insertOnceCount(oh);
		c.accept(oh);
		IFunction ifc = (Object o)-> custi.retrieveCustomer(id);
		Customers custpr = (Customers) ifc.apply(id);
		int tbprice = Integer.parseInt(custpr.getTbprice());
		int hqua = Integer.parseInt(custpr.getHqua());
		int tbprices = tbprice + totalPrice;
		int hquas = hqua + onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map2.clear();
		map2.put("tb", tb);
		map2.put("hq", hq);
		map2.put("id", id);
		IConsumer cc = (Object o) -> custi.updateCust(map2);
		cc.accept(map2);
		
		 return map2;
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
		map2.clear();
		map2.put("unit", unit);
		map2.put("id", id);
		map2.put("nprice",price);
		map2.put("rw","매도");
		map2.put("date",date);
		map2.put("tprice",tprice);
		map2.put("dmoney","0");
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> ls = (Map<String,Object>)f.apply(id);
		int  money = Integer.parseInt((String)ls.get("money"));
		int curruentMoney =  money + totalPrice;
		String bm = String.valueOf(curruentMoney);
		map2.put("bm",bm);
		IConsumer ii = (Object o) -> asi.modifyBuyAccount(map2);
		ii.accept(map2);
		IConsumer i = (Object o) -> trs.modifyTransaction(map2);
		i.accept(map2); 
		ISupplier s = ()-> ohsi.selectOnceCount();
		s.get();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		int count = (int) olist.get("currentCount"); 
		int oncecount = count + onceunit;
		String onprice= String.valueOf(GetPrice(count));
		String oc = String.valueOf(oncecount);
		map2.put("oc", oc);
		map2.put("price", onprice);
		OnceHis oh = new OnceHis();
		oh.setPrice(onprice);
		oh.setCurrentCount(oc);;
		IConsumer c = (Object o) -> ohsi.insertOnceCount(oh);
		c.accept(oh);
		IFunction ifc = (Object o)-> custi.retrieveCustomer(id);
		Customers custpr = (Customers) ifc.apply(id);
		int tbprice = Integer.parseInt(custpr.getTbprice());
		int hqua = Integer.parseInt(custpr.getHqua());
		int tbprices = tbprice - totalPrice;
		int hquas = hqua - onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map2.put("tb", tb);
		map2.put("hq", hq);
		map2.put("id", id);
		IConsumer cc = (Object o) -> custi.updateCust(map2);
		cc.accept(map2);
		
		 return map2;
	}
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/mycoin/{id}", method = RequestMethod.GET)
	public Map<String, Object> mycoin(@PathVariable("id") String id){
		map.clear();
		map.put("id", id);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> rs = (Map<String, Object>) f.apply(id);
		map.put("rs",rs);
		return map;
	}
}