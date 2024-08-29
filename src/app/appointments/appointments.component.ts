import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DprofileService } from '../dprofile.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
  doctor:any[]=[];
  constructor(private route:ActivatedRoute,private service:DprofileService){}

  availableAppointments: any[] = [
    {id: '1', healthcareProfessional: 'Dr.Sai',  time:'50mins', connection:'available' },
    {id: '2',healthcareProfessional: 'Dr.Rohit',time:'50mins', connection:'connect' },
    {id: '3',healthcareProfessional: 'Dr.Sai Krishna',time:'50mins', connection:'available' },
    {id: '4',healthcareProfessional: 'Dr.Vineeth',time:'50mins', connection:'av' },
    {id: '5', healthcareProfessional: 'Dr.Ismail',time:'50mins', connection:'available' },
    {id: '6', healthcareProfessional: 'Dr.Sujith',time:'50mins', connection:'availabl' },
  ];
  ngOnInit(): void {
      this.doctor=this.service.doctors;
  }
}