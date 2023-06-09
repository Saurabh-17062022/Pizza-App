package com.niit.jap.repository;

import com.niit.jap.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,String> {
    public User findByEmailIdAndPassword(String emailId,String password);
}
