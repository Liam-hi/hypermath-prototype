package com.example.hypermath;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Random;

@SpringBootApplication
public class HypermathApplication {

	public static void main(String[] args) {
		SpringApplication.run(HypermathApplication.class, args);
	}
}


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
class SquareController {
	@GetMapping("/square/{number}")
	public int getSquare(@PathVariable int number) {
		System.out.println(number * number);
		return number * number;
	}
}

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
class AddController {
	@GetMapping("/add/{number}")
	public int getSquare(@PathVariable int number) {
		System.out.println(number + number);
		return number + number;
	}
}

@RestController
@CrossOrigin(origins = "http://localhost:8080/")
class EstimateVolumeController {
	@GetMapping("/estimateVolume")
	public int getVolume(@RequestParam double radius, @RequestParam int dimension) {

		int count = 0;
		double sum = 0;

		for (int x = 0; x < 100000; x++){
			Random r = new Random();
			for (int i = 0; i < dimension; i++) {
				double randomValue = -(radius) + (radius - (-(radius))) * r.nextDouble();
				sum += randomValue * randomValue;
			}
			if (sum  - (radius * radius) <  0) {
				count += 1;
			}
			sum = 0;
		}
		return (int)(((double)count / 100000) * (Math.pow((radius + radius ), dimension)));
	}
}
