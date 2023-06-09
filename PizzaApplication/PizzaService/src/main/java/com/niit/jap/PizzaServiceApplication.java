package com.niit.jap;

import com.niit.jap.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PizzaServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PizzaServiceApplication.class, args);
    }

//    @Bean
//    public FilterRegistrationBean filterBean() {
//        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
//        filterRegistrationBean.setFilter(new JwtFilter());
//        filterRegistrationBean.addUrlPatterns("/userorderapp/addorder/*");
//        return filterRegistrationBean;
//    }
}
