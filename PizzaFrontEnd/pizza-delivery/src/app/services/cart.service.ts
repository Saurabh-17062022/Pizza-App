import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Items } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
addToCart(item:Items) :void{
  let cartItem = this.cart.items.find(item => item.item.id === item.id)
  if(cartItem){
    this.changeQuantity(item.id , cartItem.quantity +1)
    return ;
  }
  this.cart.items.push(new CartItem(item));
}
removeFromCart(itemId:number):void{
  this.cart.items=this.cart.items.filter(item => item.item.id! = itemId)
}
changeQuantity(quantity:number,itemId:number){
  let cartItem = this.cart.items.find(item => item.item.id === itemId);
  if(!cartItem) 
  return 
  cartItem.quantity = quantity;
}
getCart():Cart{
return this.cart;
}
}
