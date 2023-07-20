package com.muk.datavisualisation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({ "com.muk.datavisualisation*" })
public class WaterQualityVisualizationFinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(WaterQualityVisualizationFinalApplication.class, args);
	}

}
