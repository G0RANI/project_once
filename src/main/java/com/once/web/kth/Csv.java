package com.once.web.kth;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.once.web.domain.CoinArticle;

public class Csv {
	

public static void main(String[] args) throws Exception {
	String csvFileName = "C:\\Users\\taehy\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv";
	BufferedWriter writer = new BufferedWriter(
			new OutputStreamWriter(new FileOutputStream(csvFileName),"UTF-8"));
    String url =  "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start=1&refresh_start=0";
    Document doc = Jsoup.connect(url).get();
    Elements elements = doc.select("ul.type01 li dl  dt a");
    File file = new File("C:\\Users\\taehy\\git\\project_once\\src\\main\\webapp\\resources\\csv\\csv.csv");
    file.delete();
    Random random = new Random();
    writer.write("text,frequency\n");
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
    	writer.write(s+","+(random.nextInt(30)+20)+"\n");
    }
    writer.close();

	}
}