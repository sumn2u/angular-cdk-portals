```
import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, ViewChild} from '@angular/core';
import {CdkPortal, DomPortalHost} from '@angular/cdk/portal';

@Component({
  selector: 'app-action',
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class ActionComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) portal;
  private host: DomPortalHost;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private applicationRef: ApplicationRef,
      private injector: Injector
  ) {
  }

  ngAfterViewInit(): void {
    this.host = new DomPortalHost(
        document.querySelector('#action'),
        this.componentFactoryResolver,
        this.applicationRef,
        this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.host.detach();
  }
}





@Component({
  selector: 'app-magic',
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class ButtonComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) portal: CdkPortal;
  private host: PortalHost;

  constructor(
      private cfr: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
  ) {}

  ngAfterViewInit(): void {
    this.host = new DomPortalHost(
        document.querySelector('#slot'),
        this.cfr,
        this.appRef,
        this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}

```