import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@ Injectable({
  providedIn: "root"
})
export class CheckNameExistsService {
  constructor(private httpClient: HttpClient) {}

  checkNameExists(firstName: string) {
      const url = "https://jsonplaceholder.typicode.com/users";
      this .httpClient.get(url).subscribe(data => {
        for (const obj in data) {
          for (const item in data[obj]) {
            if (item == "name") {
                console.log(data[obj][item]);
                console.log(firstName);
                if (data[obj][item] === firstName) {
                    console.log(true);
                    return true;
                };
            }
          }
        }
      });
    return false;
  }
}

