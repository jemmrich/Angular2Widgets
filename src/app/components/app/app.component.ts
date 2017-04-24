import { Component, NgModule, ViewContainerRef, NgZone, ComponentFactoryResolver, Injector, ChangeDetectorRef, DoCheck, AfterViewInit, ElementRef } from '@angular/core';

// Components
import { HelloWorldComponent } from '../helloworld/helloworld.component';

// Services
import { CounterService } from '../../services/CounterService';
import { WindowRef } from '../../services/WindowRef';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <div>
    <button (click)="initializeComponents()">Initialize Components</button><br>
    <button (click)="verifyChangeDetection()">Verify change detection</button>
  </div>
`})
export class AppComponent implements DoCheck, AfterViewInit {
  title = 'App works!';

  // Holds change detection references to our dynamically loaded components.
  detectors: ChangeDetectorRef[] = [];

  // An array which holds the components selector, and the component itself.
  availableSelectors: any = [
      ['helloworld', HelloWorldComponent],
    ];

  constructor(private vcr: ViewContainerRef,
              private zone: NgZone,
              private resolver: ComponentFactoryResolver,
              private injector: Injector,
              private counterService: CounterService,
              private windowRef: WindowRef) {
  }

  ngDoCheck() {
    this.detectors.forEach( detector => detector.detectChanges() );
  }

  ngAfterViewInit() {
    console.log( "App view initialized" );
  }

  /**
   * Finds all elements that match the selectors available in our app and
   * dynamically bootstraps an instance of that component into that container.
   */
  initializeComponents() {
    // Loop through all the available angular2 components
    for( let i=0; i < this.availableSelectors.length; i++ ){

      // Get all instances of this selector
      let elements: Array<ElementRef> = this.windowRef.nativeWindow.document.querySelectorAll( this.availableSelectors[i][0] );

      // Bootstrap all instances of this selector
      for( let j=0; j < elements.length; j++ ){
        this.bootstrapComponent( this.windowRef.cssPath( elements[j] ), this.availableSelectors[i][1] );
      }
    }
  }

  /**
   * Increments a counter to show that all loaded components have change
   * detection.
   */
  verifyChangeDetection() {
    this.counterService.increment();
  }

  /**
   * Bootstrap the desired component.
   */
  bootstrapComponent(cssPath: string, component: any) {
    this.zone.run(
      () => {
        console.log( "bootstrapping component" );
        let factory = this.resolver.resolveComponentFactory( component );
        let ref = factory.create( this.injector, undefined, cssPath );
        this.detectors.push( ref.changeDetectorRef );
      });
  }
}
