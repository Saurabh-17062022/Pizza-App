package com.niit.jap.service;

import com.niit.jap.domain.Order;
import com.niit.jap.domain.User;
import com.niit.jap.exception.OrderNotFoundException;
import com.niit.jap.exception.UserAlreadyExistException;
import com.niit.jap.exception.UserNotFoundException;
import com.niit.jap.repository.UserOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    private UserOrderRepository userOrderRepository;

    @Autowired
    public UserServiceImpl(UserOrderRepository userOrderRepository) {
        this.userOrderRepository = userOrderRepository;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistException {
        if (userOrderRepository.findById(user.getEmailId()).isPresent()){
            throw new UserAlreadyExistException();
        }
        return userOrderRepository.insert(user);
    }

    @Override
    public User addOrderForUser(String emailId, Order order) throws UserNotFoundException {
        if (userOrderRepository.findById(emailId).isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = userOrderRepository.findByEmailId(emailId);
        if (user.getOrderList() == null) {
            user.setOrderList(Arrays.asList(order));
        } else {
            List<Order> orderList = user.getOrderList();
            orderList.add(order);
            user.setOrderList(orderList);
        }
        return userOrderRepository.save(user);
    }

    @Override
    public boolean deleteOrder(String items) throws OrderNotFoundException {
        boolean result = false;
        if(userOrderRepository.findById(items).isEmpty()){
            throw new OrderNotFoundException();
        }else {
            userOrderRepository.deleteById(items);
        }
        return true;
    }
}
