package com.once.web.service;

import org.springframework.stereotype.Component;

import com.once.web.domain.Accounts;

@Component
public interface AccountsService {
	public void registAccount(Accounts acc);
	public Accounts retrieveAccount(Accounts acc);
	
	public int countAccounts();
	public boolean existsAccount(Accounts acc);
	
	public void modifyAccount(Accounts acc);
	public void removeAccount(Accounts acc);
}
