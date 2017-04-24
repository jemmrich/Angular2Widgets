export class CounterService {
  counter: number = 0;

  increment(): void {
    this.counter++;
  }

  get value(): number {
    return this.counter;
  }
}
