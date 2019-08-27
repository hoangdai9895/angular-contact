import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;
  state = true;

  constructor(private contactService: ContactService) {
    // console.log(this.first_name);
  }

  changeState() {
    this.state = !this.state;
  }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
      this.contactService
        .getContacts()
        .subscribe(contacts => (this.contacts = contacts));
    });
  }

  deleteContact(id: any) {
    var contacts = this.contacts;
    console.log(contacts);
    this.contactService.deleteContact(id).subscribe(data => {
      this.contacts.filter(item => item._id !== data);
      this.contactService
        .getContacts()
        .subscribe(contacts => (this.contacts = contacts));
    });
  }

  ngOnInit() {
    this.contactService
      .getContacts()
      .subscribe(contacts => (this.contacts = contacts));
  }
}
