import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../models/item';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/items/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
item!:Items;
  constructor(private activatedRoute:ActivatedRoute, private itemServices:ItemService, private cartService:CartService, private router:Router) { 
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.item = itemServices.getItemsById(params['id'])
      }
    })}
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart')
  }

}
