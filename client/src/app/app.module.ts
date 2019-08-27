import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NgModel, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [AppComponent, ContactsComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
