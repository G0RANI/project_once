package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Transactions;

@Component
public interface TransactionsService {
	public void registTransaction(Transactions trx);
	public List<Transactions> retrieveAllTransactions(String id);
	public List<Transactions> bringWithdrawals(Transactions trx);
	public List<Transactions> bringDeposits(Transactions trx);
	public List<Transactions> retrieveAllTrx();
	public void modifyTransaction(Map<?,?> map);
	public void removeTransaction(Transactions trx);
}
