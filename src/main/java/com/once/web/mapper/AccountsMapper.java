package com.once.web.mapper;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Accounts;

@Repository
public interface AccountsMapper {
	public void insertAccount(Map<?, ?> map);
	public Accounts selectAccount(String userId);
	
	public int countAccounts();
	public boolean existsAccount(Accounts acc);
	
	public void updateAccount(Accounts acc);
	public void deleteAccount(Accounts acc);
}
