package com.pack.backend.customExceptions;

import org.springframework.http.HttpStatus;

public class RestError {
	private HttpStatus status;
	private String message;
	
	private RestError() {}

	RestError(HttpStatus status) {
		this();
		this.status = status;
	}
	
	
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

}
