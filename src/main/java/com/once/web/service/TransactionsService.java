package com.once.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.once.web.domain.Transactions;

@Component
public interface TransactionsService {
	public void registTransaction(Transactions trx);
	public List<Transactions> bringAllTransactions(Transactions trx);
	public List<Transactions> bringWithdrawals(Transactions trx);
	public List<Transactions> bringDeposits(Transactions trx);
	public int countTransactions();
	public void modifyTransaction(Transactions trx);
	public void removeTransaction(Transactions trx);
}
