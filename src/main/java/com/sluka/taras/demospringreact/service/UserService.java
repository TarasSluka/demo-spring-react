package com.sluka.taras.demospringreact.service;

import com.sluka.taras.demospringreact.model.UserDto;

import java.util.List;

public interface UserService {

    List<UserDto> getAll();

    UserDto getById(Integer id);
}
