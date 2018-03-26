import { Component, OnInit } from '@angular/core';

import { Person } from './../../domain/person';
import { PersonService } from '../../service/person.service';
import { Phone } from '../../domain/phone';

@Component({
  selector: 'app-table-selection-demo',
  templateUrl: './table-selection-demo.component.html',
  styleUrls: ['./table-selection-demo.component.css']
})
export class TableSelectionDemoComponent implements OnInit {

  people: Person[];
  person: Person = new Person();
  selectedPerson: Person;

  phone: Phone = new Phone();

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
      this.personService.findAll().subscribe(people => this.people = people);
  }

  public onRowSelect(event) {
  }

  public addPerson() {
    this.people.push(this.person);
    this.selectedPerson = this.person;

    this.person = new Person();
  }

  public addPhone() {

    console.log('addPhone');
    console.log(this.phone);
    if ( !this.selectedPerson.phones ) {
      this.selectedPerson.phones = [];
    }
    this.selectedPerson.phones.push(this.phone);
    this.phone = new Phone();
  }

  public removePhone(phone: Phone) {
    this.selectedPerson.phones.splice(this.selectedPerson.phones.indexOf(phone), 1);
  }

  public removePerson(person: Person) {
    this.people.splice(this.people.indexOf(person), 1);
  }
}
