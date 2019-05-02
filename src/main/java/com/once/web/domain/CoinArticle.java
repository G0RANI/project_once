package com.once.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Data @Component @Lazy
public class CoinArticle {
	private String mseq, 
				   nseq,
				   title,
				   adate,
				   url,
				   keyword	;
}
