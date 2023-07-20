package com.muk.datavisualisation.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.*;
import org.springframework.util.ResourceUtils;

public class ExcelReader {

	static List<String> districts = new ArrayList<String>();
	static Map<String, String> sheetHeaders = new HashMap<>();
	// Map<String,String> sheetData = new HashMap<>();
	static List<String> sheetData = new ArrayList<String>();
	// Loop through all sheets
	static Map<String, List<String>> districtSheetData = new HashMap<>();

	public static List<String> getDistricts() {

		return districts;
	}

	public static Map<String, String> getSheetHeaders() {

		return sheetHeaders;
	}

	public static Map<String, List<String>> getDistrictSheetData() {

		return districtSheetData;
	}

	public static void main(String[] args) {
		prepareWaterQualityData();
		
		System.out.println("District_Sheet_Data: "+districtSheetData.toString());

		// Printing items using a traditional for loop
		System.out.println("Printing Districts ...");
		for (int i = 0; i < districts.size(); i++) {
			System.out.println(districts.get(i));

			System.out.println("Getting Header Data for " + districts.get(i));

			System.out.println(sheetHeaders.get(districts.get(i)));

			System.out.println("Getting row data: ");
			List<String> data = districtSheetData.get(districts.get(i));

			//System.out.println("Data Size: "+data.size());
			//System.out.println("Data==>: "+data);
			for (int k = 0; k < data.size(); k++) {
				if(k ==data.size()-1) {
					System.out.println("Last Line: "+data.get(k));
				}else {
					System.out.println(data.get(k));
				}
				
			}

		}
	}

	public static void prepareWaterQualityData() {
		try {
			// Load the resource from the classpath
			File file = ResourceUtils.getFile("classpath:Water Quality Dataset.xlsx");

			// Create a workbook object from the Excel file
			Workbook workbook = WorkbookFactory.create(file);

			// Get the number of sheets in the workbook
			int numberOfSheets = workbook.getNumberOfSheets();

			for (int sheetIndex = 0; sheetIndex < numberOfSheets; sheetIndex++) {
				Sheet sheet = workbook.getSheetAt(sheetIndex);
				// System.out.println("Sheet Name: " + sheet.getSheetName());

				// Filtering Sheets with transformed data
				if (sheet.getSheetName().endsWith("_tfm")) {
					// Iterate through all rows in the sheet
					String districtName = sheet.getSheetName().replace("_tfm", "");
					districts.add(districtName);
					String data = "";
					String header = "";
					sheetData = new ArrayList<String>();
					int count = 0;
					for (Row row : sheet) {
						data  ="";
						//System.out.println("Rows: "+row);
						count++;
						// Iterate through all cells in the row
						if (count == 1) {
							// System.out.println("THIS IS THE HEADER");
							for (Cell cell : row) {
								switch (cell.getCellType()) {
								case STRING:
									 System.out.print(cell.getStringCellValue() + "\t");
									header += cell.getStringCellValue() + "\t";
									break;
								case NUMERIC:
									 System.out.print(cell.getNumericCellValue() + "\t");
									header += cell.getStringCellValue() + "\t";
									break;
								case BOOLEAN:
									 System.out.print(cell.getBooleanCellValue() + "\t");
									header += cell.getStringCellValue() + "\t";
									break;
								case BLANK:
									// System.out.print("<BLANK>\t");
									break;
								default:
									// System.out.print("<UNKNOWN TYPE>\t");
								}
							}
							// System.out.println();
							sheetHeaders.put(districtName, header);
							// System.out.println(header);
						} else {
							// System.out.println("THIS IS THE BODY");
							
							for (Cell cell : row) {
								
								switch (cell.getCellType()) {
								
								case STRING:
									//System.out.print(cell.getStringCellValue() + "\t");
									data += cell.getStringCellValue().toString() + "\t";
									break;
								case NUMERIC:

									 //System.out.print(cell.getNumericCellValue() + "\t");
									data += cell.getNumericCellValue() + "\t";
									break;
								case BOOLEAN:
									//System.out.print(cell.getBooleanCellValue() + "\t");
									data += cell.getBooleanCellValue() + "\t";
									break;
								case BLANK:
									// System.out.print("<BLANK>\t");
									data += "<BLANK>\t";
									break;
								default:
									// System.out.print("<UNKNOWN TYPE>\t");
									data += "<UNKNOWN TYPE>\t";
								}
							}
							System.out.println("=>"+data);
							sheetData.add(data);
							System.out.println();
						}

					}
					//System.out.println("SheetData: "+sheetData.size());
					districtSheetData.put(districtName, sheetData);
					// System.out.println();
				}

			}

			// Close the workbook to release resources
			workbook.close();

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
