package com.once.web.domain;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Data @Component @Lazy
public class Once {
	private String price;
	//private String odate;
	private Date odate;
	private String oseq;


}
