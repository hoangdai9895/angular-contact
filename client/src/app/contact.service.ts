import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Contact } from "./contact";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: Http) {}

  // retrieving contact
  getContacts() {
    return this.http
      .get(`http://localhost:3000/api/contacts`)
      .map(res => res.json());
  }

  //addContact
  addContact(newContact) {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    return this.http
      .post(`http://localhost:3000/api/contact`, newContact, {
        headers: header
      })
      .map(res => res.json());
  }

  // delete contact
  deleteContact(id) {
    return this.http
      .delete(`http://localhost:3000/api/contact/${id}`)
      .map(res => res.json());
  }
}
