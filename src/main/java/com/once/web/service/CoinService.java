package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Coin;

@Component
public interface CoinService {
	
	public void insertCoins(Coin coin);
	
	public List<?> selectAllCoinList();
	
	public List<?> selectCoins();
	
	public Coin selectCoin(Coin coin);
	
	public Coin retriveCoins(Coin coin);
	
	public int countAllCoins();
	
	public void updateCoin(Coin coin);
	
	public void deleteCoin(Map<?, ?> map);
	
}
