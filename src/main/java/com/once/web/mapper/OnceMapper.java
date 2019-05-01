package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Once;

@Repository
public interface OnceMapper {
public void insertOnce(Once once);
	
	public List<?> selectAllOnceList();
	
	public Map<String, Object>  selectOnce(Once once);
	
	public Once selectOnces(Once once);
	
	public Once retriveOnce(Once once);
	
	public int countAllOnce();
	
	public void updateOnce(Once once);
	
	public void deleteOnce(Map<?, ?> map);
}
