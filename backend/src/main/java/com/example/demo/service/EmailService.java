package com.example.demo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * EmailService - Handles sending email notifications
 */
@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailFrom;

    @Value("${portfolio.email.to}")
    private String mailTo;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Send email notification for contact form submissions.
     * Wrapped in try-catch to ensure failure to send email does not disrupt db persistence or api response.
     */
    public void sendContactNotification(String senderName, String senderEmail, String subject, String messageContent) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(mailFrom);
            mailMessage.setTo(mailTo);
            mailMessage.setReplyTo(senderEmail);
            mailMessage.setSubject("Portfolio Contact: " + subject + " - from " + senderName);
            
            String emailBody = String.format(
                "You received a new message from your portfolio contact form.\n\n" +
                "Sender Details:\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Subject: %s\n\n" +
                "Message:\n%s\n",
                senderName, senderEmail, subject, messageContent
            );
            mailMessage.setText(emailBody);

            logger.info("Sending contact form email to {}", mailTo);
            mailSender.send(mailMessage);
            logger.info("Email sent successfully!");
        } catch (Exception e) {
            logger.error("Failed to send contact notification email. Please check your SMTP credentials. Details: {}", e.getMessage());
            // Intentionally catch and log only, to prevent breaking the API response if email is misconfigured
        }
    }
}
