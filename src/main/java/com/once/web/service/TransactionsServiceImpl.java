package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.Transactions;
import com.once.web.mapper.TransactionsMapper;

@Service
public class TransactionsServiceImpl implements TransactionsService{
	@Autowired TransactionsMapper tr;
	
	@Override
	public void registTransaction(Transactions trx) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Transactions> retrieveAllTransactions(String id) {
		
		return tr.selectAllTransactions(id);
	}

	@Override
	public List<Transactions> bringWithdrawals(Transactions trx) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Transactions> bringDeposits(Transactions trx) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countTransactions() {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public void modifyTransaction(Map<?,?> map) {
		tr.updateTransaction(map);
	}

	@Override
	public void removeTransaction(Transactions trx) {
		// TODO Auto-generated method stub
		
	}

}
