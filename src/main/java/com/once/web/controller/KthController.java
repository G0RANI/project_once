package com.once.web.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import  org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Chat;
import com.once.web.domain.CoinArticle;
import com.once.web.domain.Cp;
import com.once.web.domain.CustService;
import com.once.web.kth.Proxy;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.ISupplier;
import com.once.web.mapper.ChatMapper;
import com.once.web.mapper.CpMapper;
import com.once.web.service.CustServiceServiceImpl;
@Controller
public class KthController {
     
     private static final Logger logger =  LoggerFactory.getLogger(KthController.class);
     @Autowired Map<String, Object> map;
     @Autowired Proxy pxy;
     @Autowired CustServiceServiceImpl cuseservice;
     @Autowired ChatMapper chatmapper;
     @Autowired CpMapper cpmapper;
     @RequestMapping("/kth")
     public String kthMain() {
         logger.info("김태혁 컨트롤 진입 했씁니다!!!");   
         return "kth";
     }
     @ResponseBody
     @RequestMapping(value = "/crawler/naver/{page}",  method = {RequestMethod.GET})
     public Map<String, Object> crawler(@PathVariable  int page) throws Exception{
        if(page!=1) {
         page = (page-1)*10+1;
        }
        pxy.word(page);
        String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start="+page+"&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li dl  dt a");
        Elements elements2 =  doc.select("dd.txt_inline");
        String text = elements2.attr("text");
        Elements times = doc.select("dd.txt_inline");
        String time = times.text();
            
        
        List<CoinArticle> list = new  ArrayList<CoinArticle>();        
        list.clear();
        int i= 0;
        map.clear();
        for(Element element: elements) {
            CoinArticle coin = new CoinArticle();
         String seq = String.valueOf(i+1);
         coin.setNseq(seq);
            String nextUrl = element.attr("href");
            coin.setUrl(nextUrl);
            String nextTitle = element.attr("title");
            coin.setTitle(nextTitle);
            
            String splitUp = time.split(" 보내기 ")[i];
            int text1 = splitUp.indexOf(" ");
            String frontDel =  splitUp.substring(text1+1);
            
            int text2 = frontDel.indexOf("전");
            String timeRes =  frontDel.substring(0,text2+1);
            coin.setAdate(timeRes);
            map.clear();
            list.add(coin);
            i++;
            
        }
        map.put("ls", list);
         return map;
     }
@ResponseBody
@RequestMapping(value = "/crawler/youtube",  method = {RequestMethod.GET})
public Map<String, Object> youcrawler() throws Exception{
	map.clear();
	List<CoinArticle> list = pxy.youtube();
	map.put("lis", list);
	return map;
};

     @ResponseBody
     @RequestMapping(value = "/notice/{npage}", method  = {RequestMethod.GET})
     public Map<String, Object> notice(@PathVariable  String npage){
         List<CustService> list = new ArrayList<>();
         list.clear();
         System.out.println(npage);
         map.put("page_num", npage);
         map.put("page_size", "10");
         map.put("block_size", "5");
         ISupplier sup  =()->cuseservice.countCustServices();
         map.put("rowCount", sup.get());
         pxy.carryOut(map);
         IFunction i = (Object o) ->  cuseservice.selectCustServiceList(pxy);
         List<?> ls = (List<?>) i.apply(pxy);
         map.clear();
         map.put("ls", ls);
         map.put("pxy", pxy);
         return map;
     }
     @ResponseBody
     @Transactional
     @RequestMapping(value = "/detail/{seq}", method  = {RequestMethod.GET})
     public Map<String, Object> detail(@PathVariable  String seq){
    	 map.clear();
    	 CustService service = new CustService();
    	 service.setCsq(seq);
    	 IConsumer c = (Object o)-> cuseservice.updateViews(service);
    	 c.accept(service);
    	 IFunction f = (Object o) -> cuseservice.selectCustService(service);
    	 CustService cuse = (CustService) f.apply(service);
    	 map.put("cuse", cuse);
    	 return map;
     }
     @ResponseBody
     @Transactional
     @RequestMapping(value = "/search/{search}/{page}", method  = {RequestMethod.GET})
     public Map<String, Object> search(@PathVariable  String search,
    		 		  				   @PathVariable String page){
    	 map.clear();
    	 String srh = "%"+search+"%";
    	 ISupplier f =  () -> cuseservice.searchCountCustServices(srh);
 		map.put("page_num", page);
 		map.put("page_size", "10");
 		map.put("block_size", "5");
 		map.put("rowCount", f.get());
 		map.put("search", srh);
 		pxy.carryOut(map);
		IFunction i = (Object o) -> cuseservice.selectSearchCustServiceList(pxy);
		List<?> ls = (List<?>) i.apply(pxy);	
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
    	 return map;
     };
     @ResponseBody
     @RequestMapping(value = "/chat/{text}", method  = {RequestMethod.POST})
     public Map<String, Object> chat(@PathVariable  String text){
      Chat cha = new Chat();
      System.out.println(text);
      Random random = new Random();
      Chat ch = null;
      IFunction f =null;
      switch (text) {
	      case "안녕하세요": case "안녕": case "하이": case "ㅎㅇ": case "하이루": case "방가방가":
		  map.clear();
	      int seq =  random.nextInt(6)+1;
	      cha.setChatSeq(String.valueOf(seq));
	      f =(Object o) -> chatmapper.selectCoinArticle(cha);
	      ch = (Chat) f.apply(cha);
	      System.out.println(ch.toString());
	      map.put("ch", ch); 
          break;
      case "4월 종가": case "5월 종가":
    	  map.clear();
    	  String txt = String.valueOf(text.charAt(0));
    	  System.out.println(txt);
    	  Cp cp = new Cp();
    	  cp.setCpnum(txt);
    	  f =(Object o)->cpmapper.selectCpList(cp);
    	  List<?> ls = (List<?>) f.apply(cp);
    	  System.out.println(ls.toString());
    	  map.put("ls", ls);
    	  break;
      default:
    	  map.clear();
          seq =  random.nextInt(10 -7 +1)+7;
          cha.setChatSeq(String.valueOf(seq));
          f =(Object o) -> chatmapper.selectCoinArticle(cha);
          ch = (Chat) f.apply(cha);
          System.out.println(ch.toString());
          map.put("ch", ch); 
          break;
      }
      return map;
     }
}
