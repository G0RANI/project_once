package com.once.web.lambda;

import org.springframework.stereotype.Service;

@FunctionalInterface
@Service
public interface FuncService {
	public Object service(Object o);
}
