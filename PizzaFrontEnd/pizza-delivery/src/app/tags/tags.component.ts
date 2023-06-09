import { Component, OnInit,Input } from '@angular/core';
import { Tag } from '../models/tag';
import { ItemService } from '../services/items/item.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  itemPageTags?:string[];
  @Input()
  justifyContent:string= 'center';
  tags?:Tag[] = [];
  constructor(private fs:ItemService) { }

  ngOnInit(): void {
    if(!this.itemPageTags)
    this.tags = this.fs.getAllTag()
  }

}
