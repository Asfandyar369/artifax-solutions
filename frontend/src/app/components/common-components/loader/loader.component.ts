import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `<div class="spinner"></div>`,
  styles: [`.spinner {
  border: 3px solid #fff;
  border-top: 3px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: auto;
  position: relative;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`]
})
export class LoaderComponent {

}
