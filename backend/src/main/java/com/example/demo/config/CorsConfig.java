package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CorsConfig - Configure Cross-Origin Resource Sharing (CORS)
 * Allows the React frontend to communicate with this Spring Boot backend
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins(
                "http://localhost:5173",      // Vite dev server (default port)
                "http://localhost:3000",      // Alternative dev port
                "TODO_YOUR_DEPLOYED_URL"      // Production frontend URL
            )
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(false)
            .maxAge(3600);                    // Cache preflight response for 1 hour
    }
}
