package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.Customers;
import com.once.web.mapper.CustomersMapper;

@Service
public class CustomersServiceImpl implements CustomersService{
	@Autowired CustomersMapper cm;

	@Override
	public void registCustomer(Map<?,?> map) {
		cm.insertCustomer(map);
	}

	@Override
	public List<Customers> bringAllAmount(Customers cust) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Customers> bringSomeCoin(Customers cust) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customers retrieveCustomer(Customers cust) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCustomers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsCustomerID(Customers cust) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyCustomer(Customers cust) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCustomer(Customers cust) {
		// TODO Auto-generated method stub
		
	}

}
