package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Customers;

@Repository
public interface CustomersMapper {
	public void insertCustomer(Map<String,Object> map);
	public List<Customers> selectAllAmount(Customers cust);
	public List<Customers> selectSomeCoin(Customers cust);
	
	public Customers selectCustomer(Map<String,Object> map);
	public int countCustomers();
	public boolean existsCustomerID(Customers cust);
	
	public void updateCustomer(Customers cust);
	public void deleteCustomer(Customers cust);
}
