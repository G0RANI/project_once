package com.once.web.mapper;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Accounts;

@Repository
public interface AccountsMapper {
	public void insertAccount(Accounts acc);
	public Accounts selectAccount(Accounts acc);
	
	public int countAccounts();
	public boolean existsAccount(Accounts acc);
	
	public void updateAccount(Accounts acc);
	public void deleteAccount(Accounts acc);
}
