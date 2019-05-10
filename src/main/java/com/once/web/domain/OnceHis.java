package com.once.web.domain;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class OnceHis {
	private String seq ,tseq,currentCount,price;
	private Date date;
}
