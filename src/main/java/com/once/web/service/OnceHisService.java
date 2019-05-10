package com.once.web.service;


import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.OnceHis;


@Component
public interface OnceHisService {
	public void  insertOnceCount(OnceHis oh);
	
	public Map<String, Object> selectOnceCount();
	
}
