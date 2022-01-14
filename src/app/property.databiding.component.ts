import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `<a [href]="website.url" [textContent]="website.name">Enlace al blog</a>`,
})
export class PropertyDatabindingComponent {
  private website = {
    url: './PropertyDatabinding.component.html/',
    name: 'blog de Angular',
  };
}
