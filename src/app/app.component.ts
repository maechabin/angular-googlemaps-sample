import { Component, ElementRef, OnInit } from '@angular/core';
import Map from './maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-googlemaps-sample';

  private _el: HTMLElement;

  readonly map = new Map();

  constructor(private el: ElementRef) {
    this._el = el.nativeElement;
  }

  ngOnInit() {
    const gmaps = this._el.querySelector('.gmaps') as HTMLDivElement;

    /** コンポーネントがマウントされたらMapを表示する */
    this.map.initMap(gmaps);

    /** Map上にマーカーを表示する */
    this.map.initMarker();

    /** Map上にポリラインを表示する */
    this.map.initPolyLine();
  }
}
