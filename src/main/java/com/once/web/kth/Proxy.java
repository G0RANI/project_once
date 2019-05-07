package com.once.web.kth;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
import java.util.Random;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;



@Data @Component @Lazy
public class Proxy {
     private int pageNum, pageSize, blockSize,  startRow, endRow, startPage, endPage, prevBlock,  nextBlock,rowCount,pageCount,blockNum,page;
     private boolean existPrev,existNext;
     private String search;
         public void carryOut(Map<String,Object>  paraMap) {
     		search = (String) paraMap.get("search");
    		String _pageNum = (String)paraMap.get("page_num");
    		pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
    		String _pageSize = (String)paraMap.get("page_size");
    		pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
    		String _blockSize = (String)paraMap.get("block_size");
    		blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
    		rowCount = (int) paraMap.get("rowCount");
    		
    		
    		
    		int nmg = rowCount % pageSize;
    		int pageCount = (nmg == 0)?rowCount / pageSize:rowCount / pageSize+1;
    		startRow = (pageNum -1) *pageSize;
    		System.out.println("스타트로우: "+startRow);
    		endRow = (rowCount > pageNum * pageSize)? pageNum * pageSize: rowCount;
    		

    		blockNum = (pageNum-1)/blockSize;
    		if(existPrev) {
    			startPage = blockNum*blockSize+1;
    			
    		}else {
    			startPage = 1;
    		}
    		
    		startPage = pageNum -((pageNum-1)%blockSize);
    		endPage = startPage+(blockSize-1);

    		if(endPage>pageCount) {
    			endPage = pageCount;
    		}
    		
    		existPrev = (startPage - pageSize) > 0;
    		existNext = (startPage + pageSize) <= pageCount;
    		prevBlock = startPage - pageSize; 
    		nextBlock = endPage + 1;
    		System.out.println("스타트페이지 "+startPage);
    		System.out.println("엔드페이지 "+endPage);
    		System.out.println("스타트로우 "+startRow);
    		System.out.println("엔드로우 "+endRow);
    		System.out.println("페이지사이즈 "+pageSize);
    		System.out.println("블록사이즈 "+blockSize);
    		System.out.println("페이지넘버 "+pageNum);
    		System.out.println("로우카운트 "+rowCount);

         }
         
    public void youtube() throws Exception {
    	String url ="https://www.youtube.com/watch?v=mFw8la7W-LU";
    	Document doc = Jsoup.connect(url).get();
    	Elements element1 = doc.select("");
    	
    }     
         
         
    public void word(int wordpage) throws Exception {
//    	page = wordpage;
    	page =1;
    	File file = new File("C:\\Users\\namgi\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv");
    	file.delete();
    	String csvFileName = "C:\\Users\\namgi\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv";
    	BufferedWriter writer = new BufferedWriter(
    			new OutputStreamWriter(new FileOutputStream(csvFileName),"UTF-8"));
    	writer.write("text,frequency\n");
    	for(int i =0; page<=41;i++) {
        String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start="+page+"&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li dl  dt a");
        Random random = new Random();
        
        String title = elements.text();
        String match ="[^\uAC00-\uD7A3xfea-zA-Z\\s]";
        title = title.replaceAll("  ", "");
        title = title.replaceAll("", "");
      title = title.replaceAll("00시", " ");
      title = title.replaceAll("01시", " ");
      title = title.replaceAll("02시", " ");
      title = title.replaceAll("03시", " ");
      title = title.replaceAll("04시", " ");
      title = title.replaceAll("05시", " ");
      title = title.replaceAll("06시", " ");
      title = title.replaceAll("07시", " ");
      title = title.replaceAll("08시", " ");
      title = title.replaceAll("09시", " ");
      title = title.replaceAll("10시", " ");
      title = title.replaceAll("11시", " ");
      title = title.replaceAll("12시", " ");
      title = title.replaceAll("13시", " ");
      title = title.replaceAll("14시", " ");
      title = title.replaceAll("15시", " ");
      title = title.replaceAll("16시", " ");
      title = title.replaceAll("17시", " ");
      title = title.replaceAll("18시", " ");
      title = title.replaceAll("19시", " ");
      title = title.replaceAll("20시", " ");
      title = title.replaceAll("21시", " ");
      title = title.replaceAll("22시", " ");
      title = title.replaceAll("23시", " ");
      title = title.replaceAll("24시", " ");
      title = title.replaceAll("이어져", " ");
      title = title.replaceAll("뉴스", " ");
      title = title.replaceAll("분", " ");
      title = title.replaceAll("원", " ");
      title = title.replaceAll("는", " ");
      title = title.replaceAll("일", " ");
      title = title.replaceAll("에", " ");
      title = title.replaceAll("여전히", " ");
      title = title.replaceAll("시황", " ");
      title = title.replaceAll("아침", " ");
      title = title.replaceAll("가상화폐", " ");
      title = title.replaceAll("암호화폐", " ");
      title = title.replaceAll("월", " ");
      title = title.replaceAll(match, " ");
        String[] arg = title.split(" ");
        arg = new HashSet<String>(Arrays.asList(arg)).toArray(new String[0]);
        System.out.println("after "+arg.length);
        
        for(String s :arg) {
        	writer.write(s+","+(random.nextInt(20)+10)+"\n");
        }
        page +=10;
    }
    	writer.close();
    }
}

