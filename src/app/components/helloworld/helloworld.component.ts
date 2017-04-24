import { Component, ElementRef, AfterViewInit } from '@angular/core';

// Services
import { CounterService } from '../../services/CounterService';

@Component({
  selector: 'helloworld',
  templateUrl: './helloworld.component.html',
    styleUrls: ['/helloworld.component.css']
})
export class HelloWorldComponent {
  title: string = '';

  constructor(private counterService: CounterService,
              private elementRef: ElementRef) {

    // Bind the title in the data-title attribute
    this.title = this.elementRef.nativeElement.getAttribute("data-title");

    console.log('Hello world widget loaded.');
  }

}
