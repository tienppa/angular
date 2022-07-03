import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-modify',
  templateUrl: './doctor-modify.component.html',
  providers: [],
})
export class DoctorModifyComponent implements OnInit {
  @ViewChild('content') content!: TemplateRef<any>;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {}
}
