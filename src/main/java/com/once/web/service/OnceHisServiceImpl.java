package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.once.web.domain.OnceHis;
import com.once.web.mapper.OnceHisMapper;

@Service
public class OnceHisServiceImpl implements OnceHisService {
	@Autowired OnceHisMapper omapper;
	
	@Override
	public void insertOnceCount(OnceHis oh) {
			  omapper.insertOnceCount(oh);
	}
	@Override
	public Map<String, Object> selectOnceCount() {
		return omapper.selectOnceCount();
	}
	@Override
	public List<OnceHis> selectprice() {
		return omapper.selectprice();
	}
	@Override
	public List<OnceHis> selectAllList() {
		return omapper.selectAllList();
	}
}
