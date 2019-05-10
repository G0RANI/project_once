package com.once.web.mapper;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.OnceHis;

@Repository
public interface OnceHisMapper {
	
	public Map<String, Object>  selectOnceCount();
	
	public void  insertOnceCount(OnceHis oh);
}
