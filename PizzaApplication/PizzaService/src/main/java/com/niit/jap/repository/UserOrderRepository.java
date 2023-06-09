package com.niit.jap.repository;

import com.niit.jap.domain.User;
import jdk.jfr.Registered;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOrderRepository extends MongoRepository<User,String> {
    public User findByEmailId(String emailId);
}
