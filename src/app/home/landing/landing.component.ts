import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
 
  
  createDesktopShortcut() {
    // Specify the URL to your Angular app and the URL to the custom .ico icon
    const appUrl = 'http://localhost:4200/#/';
    const iconUrl = 'https://www.flaticon.com/free-icon/free-delivery_411776?term=free&page=1&position=2&origin=tag&related_id=411776'; // Replace with your .ico icon URL
  
    // Create the shortcut text with the IconFile property
    const shortcutText = `[InternetShortcut]\nURL=${appUrl}\nIconFile=${iconUrl}\n`;
  
    // Create a Blob with the shortcut text
    const blob = new Blob([shortcutText], { type: 'application/octet-stream' });
  
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);
  
    // Create a link element and set its attributes
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TaslemZone.url';
    a.style.display = 'none';
  
    // Append the link element to the document body and trigger a click event
    document.body.appendChild(a);
    a.click();
  
    // Clean up by revoking the URL
    window.URL.revokeObjectURL(url);
  }
  
  
  
  }
  







