package com.once.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Accounts;

@Component
public interface AccountsService {
	public void openAnAccount(Map<?, ?> map);
	public Map<String,Object> retrieveAccount(String userId);
	
	public int countAccounts();
	public boolean existsAccount(Accounts acc);
	
	public void modifyAccount(Accounts acc);
	public void removeAccount(Accounts acc);
}
