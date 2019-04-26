package com.once.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.once.web.domain.Transactions;

@Service
public class TransactionsServiceImpl implements TransactionsService{

	@Override
	public void registTransaction(Transactions trx) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Transactions> bringAllTransactions(Transactions trx) {
		// TODO Auto-generated method stub
		return null;
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
	public void modifyTransaction(Transactions trx) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeTransaction(Transactions trx) {
		// TODO Auto-generated method stub
		
	}

}
