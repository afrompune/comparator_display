package com.ak.result_explorer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ak.result_explorer.concepts.Summary;

@CrossOrigin
@RestController
public class SummaryController {

	@Autowired
	Summarys summarys;

	@GetMapping(path = "/summary")
	public List<Summary> getFullSummary() {
		return Summarys.getFullSummary();
	}

}
