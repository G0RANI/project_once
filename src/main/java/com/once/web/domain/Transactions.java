package com.once.web.domain;

import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Transactions {
	private String tseq,rw,nprice,id,unit,date;
}
