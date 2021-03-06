package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.CustService;
import com.once.web.kth.Proxy;



@Component
public interface CustServiceService {
	public void insertCustService(CustService cuse);
	public List<CustService> selectCustServiceList(Proxy pxy);
	public List<CustService> selectSearchCustServiceList(Proxy pxy);
	public CustService selectCustService(CustService cuse);
	public int countCustServices();
	public int searchCountCustServices(String search);
	public boolean existsCustService(CustService cuse);
	public void updateCustService(CustService cuse);
	public void updateViews(CustService cuse);
	public void deleteCustService(CustService cuse);
}
