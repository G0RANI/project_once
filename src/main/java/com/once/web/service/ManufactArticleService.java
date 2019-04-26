package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.ManufactArticle;

@Component
public interface ManufactArticleService {
	public void insertManufactArticle(ManufactArticle mar);
	public List<ManufactArticle> selectManufactArticleList(Map<?,?> map);
	public ManufactArticle selectManufactArticle(ManufactArticle mar);
	public int countManufactArticles();
	public boolean existsManufactArticle(ManufactArticle mar);
	public void updateManufactArticle(ManufactArticle mar);
	public void deleteManufactArticle(ManufactArticle mar);
}
