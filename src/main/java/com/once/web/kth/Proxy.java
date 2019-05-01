package com.once.web.kth;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.once.web.domain.CoinArticle;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock,rowCount,pageCount,blockNum;
	private boolean existPrev,existNext;
	private String search;

		public void carryOut(Map<String,Object> paraMap) {
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

		
		
		
		
//	public static void main(String[] args){
//        String url = "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start=1&refresh_start=0";
//        Document doc = Jsoup.connect(url).get();
//        Elements elements = doc.select("ul.type01 li dl dt a");
//        Elements elements2 = doc.select("dd.txt_inline");
//        String text = elements2.attr("text");
//        Elements times = doc.select("dd.txt_inline");
//        String time = times.text();
//        
//
//        for(Element element: elements) {
//        	String nextTitle = element.attr("title");
//        	System.out.println(nextTitle);
//        		int i =0;
//        		String name =nextTitle.split(" ")[i];
//        		System.out.println(name);
//        		i++;
//        }
		

//	}
}