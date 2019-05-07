package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.CustService;
import com.once.web.kth.Proxy;
import com.once.web.mapper.CustServiceMapper;

@Service
public class CustServiceServiceImpl implements CustServiceService{
	@Autowired CustServiceMapper cusemap;

	@Override
	public void insertCustService(CustService cuse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CustService> selectCustServiceList(Proxy pxy) {
		return cusemap.selectCustServiceList(pxy);
	}
	
	@Override
	public List<CustService> selectSearchCustServiceList(Proxy pxy) {
		// TODO Auto-generated method stub
		return cusemap.selectSearchCustServiceList(pxy);
	}

	@Override
	public CustService selectCustService(CustService cuse) {
		return cusemap.selectCustService(cuse);
	}

	@Override
	public int countCustServices() {
		return cusemap.countCustServices();
	}

	@Override
	public int searchCountCustServices(String search) {
		return cusemap.searchCountCustServices(search);
	}
	
	@Override
	public boolean existsCustService(CustService cuse) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void updateCustService(CustService cuse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCustService(CustService cuse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateViews(CustService cuse) {
		cusemap.updateViews(cuse);
	}



}
