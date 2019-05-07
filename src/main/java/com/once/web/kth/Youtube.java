package com.once.web.kth;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.once.web.domain.CoinArticle;

public class Youtube {
	public static void main(String[] args) throws Exception {
		CoinArticle article = new CoinArticle();
    	String url1 ="https://www.youtube.com/watch?v=mFw8la7W-LU";
    	Document doc = Jsoup.connect(url1).get();
    	Elements element1 = doc.select("h1.watch-title-container span");
    	String title1 = element1.attr("title");
    	Elements element2 = doc.select("strong.watch-time-text");
    	String title2 = element2.text();
        String timeRes =  title2.substring(5);
        
        String url2 ="https://www.youtube.com/playlist?list=PL-r3nv8Pk2S2CdICd8IcNk9O8a6hBq2GS";
        Document doc2 = Jsoup.connect(url2).get();
        Elements element3 = doc.select("img");
        for(Element element : element3) {
        	String data = element.attr("src");
        	System.out.println(data);
        }
	}
}
