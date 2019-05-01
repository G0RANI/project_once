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
<<<<<<< HEAD
	
=======
>>>>>>> 6e3550840f5feb1d5a83647513d4f619a31b46f3
	@Override
	public void insertCustService(CustService cuse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CustService> selectCustServiceList(Proxy pxy) {
		return cusemap.selectCustServiceList(pxy);
	}

	@Override
	public CustService selectCustService(CustService cuse) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCustServices() {
		return cusemap.countCustServices();
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

}
