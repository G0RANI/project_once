package com.once.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Transactions {
	private String tseq,rw,nprice,id,unit,date;
}
