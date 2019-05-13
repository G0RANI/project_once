package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Accounts;
import com.once.web.domain.Cp;
import com.once.web.domain.Customers;

@Repository
public interface CpMapper {
	public List<Cp> selectCpList(Cp cp);
}
