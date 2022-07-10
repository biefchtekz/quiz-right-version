import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomInRange(min: number, max: number){
    return Math.floor(Math.random() * max) + min
  }

  randomUniqueNum(range: number, outputCount: number) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }

    return result;
  }
}
