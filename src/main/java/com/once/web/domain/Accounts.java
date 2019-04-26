package com.once.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Accounts {
	private String acnum, money;
}
