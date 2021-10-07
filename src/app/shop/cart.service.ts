import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private storage:Storage) {
    this.init();
   }

  init(){
    this.storage.create();
  }
  getData(){
    return this.storage.get(STORAGE_KEY)|| [];
  }
  async getCantidad(){
     let data = await this.storage.get(STORAGE_KEY)|| []
    return await data.length;
  }
  async getCantItems(){
    const cart = await this.storage.get(STORAGE_KEY)|| [];
    return cart.lenght;
  }
  async addData(item){
    const storedData=await this.storage.get(STORAGE_KEY)||[];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY,storedData)
  }
  async removeItem(index){
    const storedData=await this.storage.get(STORAGE_KEY)||[];
    storedData.splice(index,1);
    return this.storage.set(STORAGE_KEY,storedData)
  }
}
