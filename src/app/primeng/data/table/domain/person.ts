import { Phone } from './phone';

export class Person {

  constructor (
    public name?: string,
    public phones: Phone[] = []
  ) { }
}
