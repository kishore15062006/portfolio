package com.example.demo.controller;

import com.example.demo.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * ContactController - REST API endpoint for contact form submissions
 * Endpoint: POST /api/contact
 */
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST /api/contact
     * Receives contact form data and saves it to the database
     * 
     * Request Body:
     * {
     *   "name": "User Name",
     *   "email": "user@email.com",
     *   "subject": "Job Opportunity",
     *   "message": "Your detailed message here..."
     * }
     * 
     * Response:
     * {
     *   "status": "success",
     *   "message": "Message received. Thank you!"
     * }
     */
    @PostMapping
    public ResponseEntity<Map<String, String>> sendMessage(
        @RequestBody @Valid ContactMessageRequest request
    ) {
        try {
            // Save the message to database
            contactService.save(request);

            // Return success response
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Message received. Thank you!"
            ));
        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(500).body(Map.of(
                "status", "error",
                "message", "Failed to save message. Please try again."
            ));
        }
    }

    /**
     * Health check endpoint (optional)
     * GET /api/contact/health
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
            "status", "ok",
            "service", "portfolio-backend"
        ));
    }
}
