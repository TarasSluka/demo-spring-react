package com.sluka.taras.demospringreact.rest;

import com.sluka.taras.demospringreact.model.UserDto;
import com.sluka.taras.demospringreact.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/users")
public class UserRestController {

    private UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<UserDto> getAll() {
        return userService.getAll();
    }

    @GetMapping(value = "/{id}")
    UserDto getById(@PathVariable Integer id) {
//    ResponseEntity<UserDto>
        UserDto userDto = userService.getById(id);
//        if (userDto == null)
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        return new ResponseEntity<>(userDto, HttpStatus.OK);
        return userDto;
    }


}
