package com.niit.jap.service;

import com.niit.jap.domain.User;
import com.niit.jap.exception.UserAlreadyExistException;
import com.niit.jap.exception.UserNotFoundException;

import java.util.List;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExistException;

    User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException;

    boolean deleteUser(String emailId) throws UserNotFoundException;

    List<User> getAllUser();

}
