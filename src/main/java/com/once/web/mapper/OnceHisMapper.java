package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.OnceHis;

@Repository
public interface OnceHisMapper {
	
	public Map<String, Object>  selectOnceCount();
	
	public List<OnceHis> selectAllList();
	
	public List<OnceHis> selectprice();
	
	public void  insertOnceCount(OnceHis oh);
}
