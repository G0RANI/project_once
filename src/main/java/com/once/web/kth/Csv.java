package com.once.web.kth;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.once.web.domain.CoinArticle;

public class Csv {
	

public static void main(String[] args) throws Exception {
    String enc = new java.io.OutputStreamWriter(System.out).getEncoding();
    System.out.println(enc);
    String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start=1&refresh_start=0";
    Document doc = Jsoup.connect(url).get();
    Elements elements = doc.select("ul.type01 li dl  dt a");

    String csvFileName = "src/main/webapp/resources/csv/csv.csv";
    BufferedWriter writer = new BufferedWriter(
    		new OutputStreamWriter(new FileOutputStream(csvFileName),"MS949")
    		);
    Random random = new Random();
    writer.write("text,frequency\n");
    for(Element element: elements) {
        String title = element.ownText().trim();
        String match ="[^\uAC00-\uD7A3xfe0-9a-zA-Z\\s]";
        title = title.replaceAll(",", "");
        title = title.replaceAll("'", "");
        title = title.replaceAll("\\[", "");
        title = title.replaceAll("\\]", "");
        title = title.replaceAll("\\)", "");
        title = title.replaceAll("\\(", "");
        title = title.replaceAll("뉴스", "");
        title = title.replaceAll("\\...", "");
        title = title.replaceAll("\\···", "");
        title = title.replaceAll("\\‘", "");
        title = title.replaceAll("\\’", "");
        title = title.replaceAll("에", "");
        title = title.replaceAll("로", "");
        title = title.replaceAll("는", "");
        title = title.replaceAll("  ", "");
                String[] arg = title.split(" ");
                for(int i =0; i<arg.length;i++) {
                writer.write(arg[i]+","+(random.nextInt(100)+30)+"\n");
                }
    }
    writer.close();
    

            
}

}