package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.CoinArticle;

@Repository
public interface CoinArticleMapper {
	public void insertCoinArticle(CoinArticle coar);
	public List<CoinArticle> selectCoinArticleList(Map<?,?> map);
	public CoinArticle selectCoinArticle(CoinArticle coar);
	public int countCoinArticles();
	public boolean existsCoinArticle(CoinArticle coar);
	public void updateCoinArticle(CoinArticle coar);
	public void deleteCoinArticle(CoinArticle coar);
}
