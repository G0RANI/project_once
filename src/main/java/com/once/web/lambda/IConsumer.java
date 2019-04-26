package com.once.web.lambda;

@FunctionalInterface
public interface IConsumer {
	public abstract void accept(Object o);
}
