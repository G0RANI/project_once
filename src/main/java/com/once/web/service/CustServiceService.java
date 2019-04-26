package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.CustService;



@Component
public interface CustServiceService {
	public void insertCustService(CustService cuse);
	public List<CustService> selectCustServiceList(Map<?,?> map);
	public CustService selectCustService(CustService cuse);
	public int countCustServices();
	public boolean existsCustService(CustService cuse);
	public void updateCustService(CustService cuse);
	public void deleteCustService(CustService cuse);
}
