import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'app';
  backendMessage = '';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get("/api/hello", { responseType: 'text' })
      .subscribe(res => {
        this.backendMessage = res
      }, () => {
        window.alert("Error while calling /api/hello!")
      })
  }

}
