package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Customers;

@Component
public interface CustomersService {
	public void registCustomer(Map<String,Object> map);
	public List<Customers> bringAllAmount(Customers cust);
	public List<Customers> bringSomeCoin(Customers cust);
	
	public Customers retrieveCustomer(Map<String,Object> map);
	public int countCustomers();
	public boolean existsCustomerID(Map<String,Object> map);
	
	public void modifyCustomer(Customers cust);
	public void removeCustomer(Customers cust);

}
