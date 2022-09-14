package de.greyshine.webview.backend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class Controller {

    @GetMapping("/time")
    public String getTime() {
        log.info("requested time");
        return LocalDateTime.now().format( DateTimeFormatter.ISO_LOCAL_DATE_TIME );
    }
}
