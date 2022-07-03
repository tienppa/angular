import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DoctorModel } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-doctor-modify',
  templateUrl: './doctor-modify.component.html',
  providers: [],
})
export class DoctorModifyComponent implements OnInit {
  item!: DoctorModel.DoctorInfo;

  @Input()
  setItem(data: DoctorModel.DoctorInfo) {
    const me = this;
    me.item = data || null;
  }

  @Output() closeModal$ = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  close(value: any) {
    const me = this;
    me.closeModal$.emit(value);
  }
}
