package com.niit.jap.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document
public class User {
    private int userId;
    private String username;
    List<Order> orderList;
    @Id
    private String emailId;
    private long mobileNo;

    public User() {
    }

    public User(int userId, String username, List<Order> orderList, String emailId, long mobileNo) {
        this.userId = userId;
        this.username = username;
        this.orderList = orderList;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Order> orderList) {
        this.orderList = orderList;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(long mobileNo) {
        this.mobileNo = mobileNo;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", orderList=" + orderList +
                ", emailId='" + emailId + '\'' +
                ", mobileNo=" + mobileNo +
                '}';
    }
}
