package com.niit.jap.service;

import com.niit.jap.domain.User;
import com.niit.jap.exception.UserAlreadyExistException;
import com.niit.jap.exception.UserNotFoundException;
import com.niit.jap.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistException {
        if(userRepository.findById(user.getEmailId()).isPresent()){
    throw new UserAlreadyExistException();
        }
        return userRepository.save(user);
    }

    @Override
    public User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException {
        User user = userRepository.findByEmailIdAndPassword(emailId,password);
        if (user == null){
            throw new UserNotFoundException();
        }
        return user;
    }

    @Override
    public boolean deleteUser(String emailId) throws UserNotFoundException {
        boolean result = false;
        if (userRepository.findById(emailId).isEmpty()) {
            throw new UserNotFoundException();
        } else {
            userRepository.deleteById(emailId);
        }
        return true;
    }

    @Override
    public List<User> getAllUser() {
        return (List<User>) userRepository.findAll();
    }
}
