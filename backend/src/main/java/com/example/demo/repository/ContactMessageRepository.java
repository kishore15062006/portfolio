package com.example.demo.repository;

import com.example.demo.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * ContactMessageRepository - Data access layer for ContactMessage
 * Extends JpaRepository for CRUD operations + additional custom queries
 */
@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

    /**
     * Find all unread messages (useful for admin panel)
     */
    List<ContactMessage> findByIsReadFalse();

    /**
     * Find all messages from a specific email
     */
    List<ContactMessage> findByEmail(String email);
}
