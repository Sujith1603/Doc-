import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  servicesList: any[] = [
    {
      name: 'Home Health Checkups',
      description: 'Comprehensive health checkups in the comfort of your home.',
      icon: '/assets/icons/health-checkup-icon.png'
    },
    {
      name: 'Prescription Delivery',
      description: 'Get your prescribed medications delivered to your doorstep.',
      icon: '/assets/icons/prescription-icon.png'
    },
    // Add more services as needed
  ];
}
