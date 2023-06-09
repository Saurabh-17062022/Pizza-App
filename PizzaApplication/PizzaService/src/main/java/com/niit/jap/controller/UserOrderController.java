package com.niit.jap.controller;

import com.niit.jap.domain.Order;
import com.niit.jap.domain.User;
import com.niit.jap.exception.OrderNotFoundException;
import com.niit.jap.exception.UserAlreadyExistException;
import com.niit.jap.exception.UserNotFoundException;
import com.niit.jap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/userorderapp")
public class UserOrderController {
    private final UserService userService;

    @Autowired
    public UserOrderController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody User user) throws UserAlreadyExistException {
        try {
            user.setOrderList(new ArrayList<>());
            return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
        } catch (Exception e) {
            throw new UserAlreadyExistException();
        }
    }

    @PutMapping("/addorder/{emailId}")
    public ResponseEntity<?> addOrderToUser(@PathVariable String emailId, @RequestBody Order order) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(userService.addOrderForUser(emailId, order), HttpStatus.OK);
        } catch (Exception e) {
            throw new UserNotFoundException();
        }
    }
@DeleteMapping("/delete/{items}")
    public ResponseEntity<?> delete(@PathVariable String items, @RequestBody Order order) throws OrderNotFoundException {
        return new ResponseEntity<>(userService.deleteOrder(items),HttpStatus.OK);
    }
}
