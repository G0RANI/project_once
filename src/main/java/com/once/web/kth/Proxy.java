package com.once.web.kth;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
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
     private int pageNum, pageSize, blockSize,  startRow, endRow, startPage, endPage, prevBlock,  nextBlock,rowCount,pageCount,blockNum;
     private boolean existPrev,existNext;
     private String search;
         public void carryOut(Map<String,Object>  paramMap) {
     		//page_num,page_size,blocksize,totalCount
        	 search = (String) paramMap.get("search");
     		this.pageNum =(paramMap.get("page_num")==null)?1:Integer.parseInt((String) paramMap.get("page_num"));
     		this.pageSize =(paramMap.get("page_size")==null)?5:Integer.parseInt((String) paramMap.get("page_size"));
     		
     		
     		rowCount = (int) paramMap.get("rowCount");
     		int pageCount = rowCount/pageSize;
     		if(rowCount%pageSize!=0) {
     			pageCount++;
     		}
     		this.startRow = pageSize*(pageNum-1)+1;
     		this.endRow = pageNum * pageSize;
     		endRow = (rowCount > endRow)?endRow:rowCount;
     		this.blockSize =(paramMap.get("blocksize")==null)?5:Integer.parseInt((String) paramMap.get("blocksize"));
     		
     		
     		this.existPrev = (pageNum<=blockSize)?false:true;
     		
     		startPage = ((pageNum-1)/blockSize)*blockSize+1;
     		this.existNext = (startPage+pageSize)>pageCount?false:true;
     		endPage = startPage + 4;
     		if(endPage>pageCount) {
     			endPage = pageCount;
     		
     		}

     		prevBlock = startPage - pageSize;
     		nextBlock = startPage + pageSize;
         System.out.println("스타트페이지 "+startPage);
         System.out.println("엔드페이지 "+endPage);
         System.out.println("스타트로우 "+startRow);
         System.out.println("엔드로우q "+endRow);
         System.out.println("페이지사이즈 "+pageSize);
         System.out.println("블록사이즈 "+blockSize);
         System.out.println("페이지넘버 "+pageNum);
         System.out.println("로우카운트  "+rowCount);
         }
         
         
         
         
   public static void main(String[] args) throws Exception{
        String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start=1&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li  dl dt a");

        for(Element element: elements) {
        	String title = element.ownText().trim();
        	String[] arg = title.split(" ");
        	for(int i =0; i<arg.length;i++) {
        		System.out.println(arg[i]);
        		Files.write(Paths.get(title + ".csv"), arg[i].getBytes("UTF-8"));
        	}
//                String name[] =nextTitle.split("  ");
//                for(int i =0; i<=name.length;i++) {
//                	System.out.println(name[i]);
//                }
        }
         
   }
}