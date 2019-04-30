package com.once.web.kth;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum;
	private String start;

		public void carryOut(Map<?,?> paraMap) {
		String _pageNum = (String)paraMap.get("page_num");
		pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
		start = (String) paraMap.get("start");
		String url ="https://search.naver.com/search.naver?&where=news&query=비트코인%20시세&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=47&start="+start+"&refresh_start=0";
		}
		

}