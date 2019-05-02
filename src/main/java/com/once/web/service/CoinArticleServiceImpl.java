package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.CoinArticle;

@Service
public class CoinArticleServiceImpl implements CoinArticleService{
	@Autowired 
	@Override
	public void insertCoinArticle(CoinArticle coar) {
		
		
	}

	@Override
	public List<CoinArticle> selectCoinArticleList(Map<?, ?> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CoinArticle selectCoinArticle(CoinArticle coar) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCoinArticles() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsCoinArticle(CoinArticle coar) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void updateCoinArticle(CoinArticle coar) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCoinArticle(CoinArticle coar) {
		// TODO Auto-generated method stub
		
	}

}
