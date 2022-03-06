import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//create a class fact that will define the type attributes
export class Fact {
  constructor(public fact: string, public length: string) {}
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //implement httpClient Module into constructor so we can make HTTP request
  constructor(private httpClient: HttpClient) {}

  //define a variable fact of type Fact
  fact!: Fact;

  ngOnInit(): void {
    //call function getFact
    this.getFact();
  }

  //create a function that call the API
  getFact() {
    this.httpClient
      .get<any>('https://catfact.ninja/fact')
      .subscribe((response) => {
        this.fact = response;

        //test on how to fetch "fact" only within the JSON object
        console.log(this.fact.fact);
      });
  }
}
