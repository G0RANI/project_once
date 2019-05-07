package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.Once;
import com.once.web.mapper.OnceMapper;
@Service
public class OnceServiceImpl implements OnceService {
	@Autowired OnceMapper mapper;
	
	@Override
	public void insertOnce(Once once) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Once> selectAllOnceList() {
		
		return mapper.selectAllOnceList();
	}

	@Override
	public  Map<String, Object> selectOnce(Once once) {
		
		return mapper.selectOnce(once);
	}

	@Override
	public List<Once> selectPrice() {
		return mapper.selectPrice();
	}

	@Override
	public Once retriveOnce(Once once) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countAllOnce() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void updateOnce(Once once) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteOnce(Map<?, ?> map) {
		// TODO Auto-generated method stub
		
	}

}
