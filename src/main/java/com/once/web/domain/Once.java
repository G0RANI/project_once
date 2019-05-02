package com.once.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Data @Component @Lazy
public class Once {
<<<<<<< HEAD
	private String oseq,
				   high,
				   low,
				   open,
				   close,
				   data;
=======
	private String price,
				   date,
				   oseq;
>>>>>>> 09fc948617b9abf9edf754134ba45936d5042bda

}

