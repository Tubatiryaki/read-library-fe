package com.RL.dto;

import com.RL.domain.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthorDTO {

    private Long id;

    @NotNull(message="Name can not be null")    @NotBlank(message="Name can not be white space")
    @Size(min=4,max=70, message="Name '${validatedValue}' must be between {min} and {max} chars long")
    private String name;
}
