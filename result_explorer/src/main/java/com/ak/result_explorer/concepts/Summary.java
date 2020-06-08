package com.ak.result_explorer.concepts;

public class Summary {
	String particular;
	String value;
	String query;

	public Summary(String particular, String value, String query) {
		super();
		this.particular = particular;
		this.value = value;
		this.query = query;
	}

	public String getParticular() {
		return particular;
	}

	public void setParticular(String particular) {
		this.particular = particular;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

}
