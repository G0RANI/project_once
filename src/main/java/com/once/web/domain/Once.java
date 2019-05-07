package com.once.web.domain;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Data @Component @Lazy
public class Once {
<<<<<<< HEAD
	private String price,
				   odate,
				   oseq;
=======
	private String price;
	//private String odate;
	private Date odate;
	private String oseq;

>>>>>>> 045a3ec049ff6bbf3279d0805cc72625a2c4df9d

}

