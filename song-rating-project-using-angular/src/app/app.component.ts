import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  songDetails = [{
	  "title":"akashlina",
	  "artist":"amit",
	  "releasedYear":2017,
	  "music":"shan",
	  "lyrics":"amit",
	  "tune":"amit",
	  "studio":"ahornishStudio",
	  "rating":3,
	  "ratingCount":234
  },
  {
	  "title":"alor michile",
	  "artist":"amit",
	  "releasedYear":2017,
	  "music":"shan",
	  "lyrics":"amit",
	  "tune":"amit",
	  "studio":"ahornishStudio",
	  "rating":4.5,
	  "ratingCount":157
  }
  ]
  
}
