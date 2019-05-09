package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Transactions;

@Repository
public interface TransactionsMapper {
	public void insertTransaction(Transactions trx);
	public List<Transactions> selectAllTransactions(String id);
	public List<Transactions> selectWithdrawals(Transactions trx);
	public List<Transactions> selectDeposits(Transactions trx);
	public int countTransactions();
	public void updateTransaction(Map<?,?> map);
	public void deleteTransaction(Transactions trx);
}
