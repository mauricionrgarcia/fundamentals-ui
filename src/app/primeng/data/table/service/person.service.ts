import {Observable} from 'rxjs/Observable';

import { Person } from './../domain/person';
import { Phone } from '../domain/phone';

export class PersonService {

  public get(name: string): Observable<Person> {

    return Observable.create(
      observer => {
        this.findAll().subscribe(
          ( people: Person[] ) => {
            for ( const person of people ) {
              if ( person.name === name ) {
                observer.next(person);
                observer.complete();
              }
          }
        });
      });
  }

  public findAll(): Observable<Person[]> {
    return Observable.create(
      observer => {
        const people = [];

        console.log('service');
        let person = new Person();
        person.name = 'Ana';
        console.log(person);

        let phones = [];
        phones.push(new Phone('123456789'));
        person.phones = phones;

        people.push(person);

        person = new Person();
        person.name = 'Bruna';

        phones = [];
        phones.push(new Phone('987654321'));
        person.phones = phones;

        people.push(person);

        observer.next(people);
        observer.complete();
      });
  }

}
