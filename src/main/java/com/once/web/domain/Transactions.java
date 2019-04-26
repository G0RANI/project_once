package com.once.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Transactions {
	private int tseq;
	String rw, rwm;
}
