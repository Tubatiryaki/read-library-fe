package com.RL.dto;

import com.RL.domain.Author;
import com.RL.domain.Category;
import com.RL.domain.Publisher;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.File;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {

        @Size(min = 2, max = 80, message = "12")
        @NotNull(message = "Please provide book name")
        private String name;

        @Size(min = 10, max = 20, message = "23")
        @NotNull(message = "Please provide isbn code")
        @Pattern(regexp = "^\\d{3}-\\d{2}-\\d{5}-\\d{2}-\\d$", message = "Please provide valid isbn")
        private String isbn;

        private int pageCount;

        @NotNull(message = "PLease provide author for book")
        private Author authorId;

        @NotNull(message = "Please provide publisher for book")
        private Publisher publisherId;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern =
                "yyyy", timezone = "Turkey")
        private int publishDate;

        @NotNull(message = "Please provide category for book")
        private Category categoryId;

//        private File image;

        @Size(min = 5, max = 8, message = "34")
        @NotNull(message = "Please provide shelf code")
        @Pattern(regexp = "^[A-Z]{2}-\\d{3}$", message = "Please provide valid shelf code")
        private String shelfCode;

        @NotNull(message = "Please provide book featured")
        private boolean featured;



    }

