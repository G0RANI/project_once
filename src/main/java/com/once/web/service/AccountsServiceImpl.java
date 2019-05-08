package com.once.web.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.Accounts;
import com.once.web.mapper.AccountsMapper;

@Service
public class AccountsServiceImpl implements AccountsService{
	@Autowired AccountsMapper am;
	
	@Override
	public void openAnAccount(Map<?, ?> map) {
		am.insertAccount(map);
	}

	@Override
	public Map<String,Object> retrieveAccount(String userId) {
		
		return am.selectAccount(userId);
	}

	@Override
	public int countAccounts() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsAccount(Accounts acc) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyAccount(Accounts acc) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeAccount(Accounts acc) {
		// TODO Auto-generated method stub
		
	}

}
