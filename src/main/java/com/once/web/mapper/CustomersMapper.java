package com.once.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Customers;

@Repository
public interface CustomersMapper {
	public void insertCustomer(Customers cust);
	public List<Customers> selectAllAmount(Customers cust);
	public List<Customers> selectSomeCoin(Customers cust);
	
	public Customers selectCustomer(Customers cust);
	public int countCustomers();
	public boolean existsCustomerID(Customers cust);
	
	public void updateCustomer(Customers cust);
	public void deleteCustomer(Customers cust);
}
