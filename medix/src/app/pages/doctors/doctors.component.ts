import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorRequest } from 'src/app/shared/models/request/doctor.request';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  providers: [],
})
export class DoctorsComponent extends BaseComponent implements OnInit {
  constructor(private doctorService: DoctorService) {
    super();
  }

  ngOnInit() {}

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getDoctors() {
    const me = this;
    me.doctorService.getDoctors().subscribe({
      next: (res) => {},
      error: (err) => {
        console.log(err);
      },
    });
  }
}
