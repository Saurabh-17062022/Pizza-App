package com.niit.jap.domain;

import org.springframework.data.annotation.Id;

public class Order {

    private int orderId;
    @Id
    private String items;
    private double price;

    public Order() {
    }

    public Order(int orderId, String items, double price) {
        this.orderId = orderId;
        this.items = items;
        this.price = price;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", items='" + items + '\'' +
                ", price=" + price +
                '}';
    }
}
