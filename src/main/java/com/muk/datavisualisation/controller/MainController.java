package com.muk.datavisualisation.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

	List<String> districts = new ArrayList<String>();
	Map<String, String> sheetHeaders = new HashMap<>();

	Map<String, List<String>> districtSheetData = new HashMap<>();

	@PostConstruct
	public void init() {
		// Add your initialization logic here
		System.out.println("Initialize excel Data.");
		ExcelReader.prepareWaterQualityData();
		districts = ExcelReader.getDistricts();
		sheetHeaders = ExcelReader.getSheetHeaders();
		districtSheetData = ExcelReader.getDistrictSheetData();
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(HttpServletRequest request) {
		System.out.println("Loading Main Page .......");
		Map<String, Object> model = new HashMap<String, Object>();

		//System.out.println("Districts: " + districts.toString());
		model.put("districts", districts);

		String viewName = "index";
		return new ModelAndView(viewName, "model", model);
	}

	@RequestMapping(value = "/getdistrictdataheader.htm", method = RequestMethod.GET)
	@ResponseBody
	public String getdistrictdataheader(HttpServletRequest request, Model model,
			@ModelAttribute("districtname") String name) throws InterruptedException {

		String response = "[";

		//System.out.println("District Name: " + name);
		response += "{\"header\":\"" + sheetHeaders.get(name).trim().replace("\t", ",") + "\"}";

		//System.out.println("Header Request Response: " + response);
		response += "]";

		return response;
	}

	@RequestMapping(value = "/getdistrictdata.htm", method = RequestMethod.GET)
	@ResponseBody
	public String getdistrictdata(HttpServletRequest request, Model model,
			@ModelAttribute("districtname") String name) {
		
		String response = "[";
		
		//System.out.println("District name: "+name);
		List<String> data = districtSheetData.get(name);

		//System.out.println("Data Size: "+data.size());
		//System.out.println("Data==>: "+data);
		
		if (data.size() > 0) {
			for (int k = 0; k < data.size()-1; k++) {
				
				//System.out.println(data.get(k));
				response += "{\"record\":\"" + data.get(k).trim().replace("\t", ",") +"\"},";
				

			}
			response += "{\"record\":\"" + data.get(data.size()-1).trim().replace("\t", ",") +"\"}";
			
		}
		
		


		response += "]";

		//System.out.println("Header Request Response: " + response);
		
		return response;
	}
}
