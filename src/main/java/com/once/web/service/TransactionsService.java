package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Transactions;

@Component
public interface TransactionsService {
	public void registTransaction(Transactions trx);
	public Map<String,Object> retrieveAllTransactions(String id);
	public List<Transactions> bringWithdrawals(Transactions trx);
	public List<Transactions> bringDeposits(Transactions trx);
	public int countTransactions();
	public void modifyTransaction(Transactions trx);
	public void removeTransaction(Transactions trx);
}
