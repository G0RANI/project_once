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


public class Proxy {
	
	public static void main(String[] args) throws Exception {
        String url = "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start=1&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li dl dt a");
        Elements elements2 = doc.select("dd.txt_inline");
        String text = elements2.attr("text");
        Elements times = doc.select("dd.txt_inline");
        String time = times.text();
        

//        for(Element element: elements) {
//        	String nextTitle = element.attr("title");
//        	System.out.println(nextTitle);
//        	for(int i=0;i<30;i++) {
//        		String name =nextTitle.split(" ")[i];
//        		System.out.println(name);
//        	}
//        }
        
	}
}