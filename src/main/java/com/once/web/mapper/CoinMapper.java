package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Coin;

@Repository
public interface CoinMapper {
	public void insertCoins(Coin coin);

	public List<?> selectAllCoinList();

	public List<?> selectCoins();

	public Coin selectCoin(Coin coin);

	public Coin retriveCoins(Coin coin);

	public int countAllCoins();

	public void updateCoin(Coin coin);

	public void deleteCoin(Map<?, ?> map);
}
