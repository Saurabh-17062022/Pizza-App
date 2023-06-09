import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/items/item.service';
import { Items } from '../models/item';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items:Items[]=[];

  constructor(private fs:ItemService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.items=this.fs.getAll().filter(item => item.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.items=this.fs.getAllItemsByTag(params['tag'])
      else
        this.items = this.fs.getAll();
    
    })
  
  }
}
