package com.sluka.taras.demospringreact.service.impl;

import com.sluka.taras.demospringreact.model.UserDto;
import com.sluka.taras.demospringreact.service.UserService;
import org.hibernate.validator.constraints.ScriptAssert;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Max;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private List<UserDto> partnerDtos = new ArrayList<>();

    public UserServiceImpl() {
        UserDto userDto1 = new UserDto();
        userDto1.setId(1);
        userDto1.setName("user 1");
        userDto1.setEmail("user1@gmail.com");

        UserDto userDto2 = new UserDto();
        userDto2.setId(2);
        userDto2.setName("user 2");
        userDto2.setEmail("user1@gmail.com");

        UserDto userDto3 = new UserDto();
        userDto3.setId(3);
        userDto3.setName("user 3");
        userDto3.setEmail("user3@gmail.com");

        UserDto userDto4 = new UserDto();
        userDto4.setId(4);
        userDto4.setName("user 4");
        userDto4.setEmail("user4@gmail.com");

        UserDto userDto5 = new UserDto();
        userDto5.setId(5);
        userDto5.setName("user 5");
        userDto5.setEmail("user5@gmail.com");

        partnerDtos.add(userDto1);
        partnerDtos.add(userDto2);
        partnerDtos.add(userDto3);
        partnerDtos.add(userDto4);
        partnerDtos.add(userDto5);

    }

    public List<UserDto> getAll() {
        return partnerDtos;
    }

    public UserDto getById(Integer id) {
        return partnerDtos.get(id - 1);
    }

}
