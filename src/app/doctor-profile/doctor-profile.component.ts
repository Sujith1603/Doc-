import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DprofileService } from '../dprofile.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent implements OnInit {
  doctorId: any ;
  
  doctor: any; 

  constructor(
    private route: ActivatedRoute,
    private service: DprofileService
  ) {}

  ngOnInit(): void {
    this.doctorId=this.route.snapshot.params['id'];
    this.doctor=this.service.doctors.find(x =>x.id===this.doctorId);    
  }
}
