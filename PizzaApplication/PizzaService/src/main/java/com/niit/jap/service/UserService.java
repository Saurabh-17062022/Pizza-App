package com.niit.jap.service;

import com.niit.jap.domain.Order;
import com.niit.jap.domain.User;
import com.niit.jap.exception.OrderNotFoundException;
import com.niit.jap.exception.UserAlreadyExistException;
import com.niit.jap.exception.UserNotFoundException;

public interface UserService {
    public abstract User addUser(User user) throws UserAlreadyExistException;
    public abstract User addOrderForUser(String emailId, Order order) throws UserNotFoundException;
    public abstract boolean deleteOrder(String items) throws OrderNotFoundException;
}
