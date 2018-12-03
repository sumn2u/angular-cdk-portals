# Anguar CDK portals example

###
View [article](https://medium.com/@sumn2u/dynamic-ui-using-portals-in-angular-cdk-6051988b0f81)

## Prerequisites
You will need the following things properly installed on your laptop/pc.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Installing Nodejs via `nvm` [docs](https://github.com/creationix/nvm)
* **Install Script**
-`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash` 
- or `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`
* **Load nvm**
-`export NVM_DIR="$HOME/.nvm"`
- `[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`
* **Verify Installation**
- `command -v nvm`
- `nvm -v`
* **Download latest node**
- `nvm install node`
* **Use Node**
- `nvm use node`

## Installation

* `git clone <repository-url>` this repository
*  change into the new directory
* `npm install`


## Running / Development

* `npm start`


### Running Tests

* `npm run test`

### Building

* ` npm run build` (production)

### Creating portal 

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
###
View [article](https://medium.com/@sumn2u/dynamic-ui-using-portals-in-angular-cdk-6051988b0f81)


