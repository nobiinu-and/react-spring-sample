package com.example.demo.controller;

import com.example.demo.repository.MessageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    private final MessageRepository messageRepository;

    public HelloController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return messageRepository.findAll().stream()
                .findFirst()
                .map(m -> Map.of("message", m.getContent()))
                .orElse(Map.of("message", "Hello, World!"));
    }
}
