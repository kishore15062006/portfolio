package com.example.demo.service;

import com.example.demo.controller.ContactMessageRequest;
import com.example.demo.model.ContactMessage;
import com.example.demo.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * ContactService - Business logic layer for contact form handling
 * Handles saving contact messages to the database
 */
@Service
public class ContactService {

    private final ContactMessageRepository repository;
    private final EmailService emailService;

    public ContactService(ContactMessageRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    /**
     * Save a new contact message to the database
     * Validates and persists the message, then sends an email notification
     */
    public void save(ContactMessageRequest request) {
        ContactMessage message = new ContactMessage();
        message.setName(request.name());
        message.setEmail(request.email());
        message.setSubject(request.subject());
        message.setMessage(request.message());
        // sentAt is automatically set by @PrePersist in ContactMessage entity
        
        repository.save(message);

        // Send email notification to the Gmail service asynchronously/separately
        emailService.sendContactNotification(
            message.getName(),
            message.getEmail(),
            message.getSubject(),
            message.getMessage()
        );
    }

    /**
     * Get all unread messages (for admin dashboard in future)
     */
    public List<ContactMessage> getAllUnread() {
        return repository.findByIsReadFalse();
    }

    /**
     * Get all messages from a specific email
     */
    public List<ContactMessage> getMessagesByEmail(String email) {
        return repository.findByEmail(email);
    }

    /**
     * Mark a message as read
     */
    public void markAsRead(Long id) {
        repository.findById(id).ifPresent(message -> {
            message.setRead(true);
            repository.save(message);
        });
    }
}
