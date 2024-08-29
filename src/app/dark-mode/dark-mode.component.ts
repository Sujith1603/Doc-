// dark-mode.component.ts
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent implements OnInit {
  constructor(public darkModeService: DarkModeService) {}

  ngOnInit(): void {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}

