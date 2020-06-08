package com.ak.result_explorer.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ak.excel_utils.ExcelUtils;
import com.ak.result_explorer.concepts.Summary;

@Service
public class Summarys {

	private static ExcelUtils exl = new ExcelUtils("Data.xls");

	public static List<Summary> getFullSummary() {
		List<Summary> summarys = new ArrayList<Summary>();
		List<Map<String, String>> records = exl.getAllRecords("summary");
		for (Map<String, String> record : records) {
			summarys.add(new Summary(record.get("particular"), record.get("value"), record.get("query")));
		}
		return summarys;
	}

}
