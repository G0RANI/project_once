package com.once.web.mapper;

import org.springframework.stereotype.Repository;

import com.once.web.domain.Chat;


@Repository
public interface ChatMapper {
	public Chat selectCoinArticle(Chat cha);
}
