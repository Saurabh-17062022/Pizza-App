import { Injectable } from '@angular/core';
import { Items } from 'src/app/models/item';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItemsById(id:number):Items{
  return this.getAll().find(item => item.id == id)!;
  }
  getAllItemsByTag(tag: string): Items[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(item => item.tags?.includes(tag))
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 11 },
      { name: 'Italian', count: 5 },
      { name: 'Indian', count: 1 },
      { name: 'Indie-Italian', count: 1 },
      { name: 'Top-rated', count: 3 },
      { name: 'Indie', count: 1 },
      { name: 'Bestseller', count: 2 },
      { name: 'Must-Try', count: 2 },
      { name: 'Soft Drink', count: 4 },
      { name: 'Recommended', count: 1 },
    ]
  }
  getAll(): Items[] {
    return [
      {
        id: 1,
        name: 'Mozzarella-Pizza',
        price: 599,
        size: 'large',
        imageUrl: './assets/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg',
        tags: ['Italian', 'Pizza', 'Bestseller', 'Top-rated'],
        deliveryTime: '30-40'
      },
      {
        id: 2,
        name: 'Black Olive Pizza',
        price: 399,
        size: 'large',
        imageUrl: './assets/images.jfif',
        tags: ['Italian', 'Pizza', 'Recommended'],
        deliveryTime: '35-45'
      },
      {
        id: 3,
        name: 'Mix-Veggie Pizza',
        price: 350,
        size: 'large',
        imageUrl: './assets/images (1).jfif',
        tags: ['Indian', 'Veg', 'Pizza'],
        deliveryTime: '30-40'
      },
      {
        id: 4,
        name: 'Capsicum-olive Pizza',
        price: 349,
        size: 'large',
        imageUrl: './assets/images (2).jfif',
        tags: ['Italian', 'Bestseller', 'Top-rated'],
        deliveryTime: '30-40'
      },
      {
        id: 5,
        name: 'Chicken Pizza',
        price: 599,
        size: 'large',
        imageUrl: './assets/images (3).jfif',
        tags: ['Italian', 'Pizza', 'Must-Try'],
        deliveryTime: '40-45'
      },
      {
        id: 6,
        name: 'Cheese-Corn Pizza',
        price: 299,
        size: 'large',
        imageUrl: './assets/images (8).jfif',
        tags: ['Italian', 'Pizza', 'Top-rated'],
        deliveryTime: '30-40'
      },
      {
        id: 7,
        name: 'Paneer-Cheese Pizza',
        price: 499,
        size: 'large',
        imageUrl: './assets/download (1).jfif',
        tags: ['Indie', 'Pizza'],
        deliveryTime: '30-35'
      },
      {
        id: 8,
        name: 'Olive-Tomato Pizza',
        price: 399,
        size: 'large',
        imageUrl: './assets/download (2).jfif',
        tags: ['Indie-Italian', 'Pizza', 'Must-Try'],
        deliveryTime: '30-40'
      },
      {
        id: 9,
        name: 'Coco-Cola',
        price: 60,
        size: 'Medium',
        imageUrl: './assets/images (4).jfif',
        tags: ['Soft Drink'],
        deliveryTime: ''
      },
      {
        id: 10,
        name: 'Thums-up',
        price: 60,
        size: 'medium',
        imageUrl: './assets/images (5).jfif',
        tags: ['Soft Drink'],
        deliveryTime: ''
      },
      {
        id: 11,
        name: '7up',
        price: 60,
        size: 'medium',
        imageUrl: './assets/images (6).jfif',
        tags: ['Soft Drink'],
        deliveryTime: ''
      },
      {
        id: 10,
        name: 'Mountain Dew',
        price: 60,
        size: 'medium',
        imageUrl: './assets/images (7).jfif',
        tags: ['Soft Drink'],
        deliveryTime: ''
      },
    ]
  }
}
