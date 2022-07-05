import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent extends BaseComponent implements OnInit {
  @Input() items: AppointmentModel.AppointmentInfo[] = [];

  @Output() getItem$ = new EventEmitter();
  @Output() deleteItem$ = new EventEmitter<string>();
  @Output() reload$ = new EventEmitter();

  selected!: AppointmentModel.AppointmentInfo;
  readonly: boolean = false;
  isAdd: boolean = false;
  filter: AppointmentModel.AppointmentInfo[] = this.items;

  p: number = 1;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    super();
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    const me = this;
    if (me.items) {
      me.filter = me.items;
    }
  }

  onDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }

  convertLabel(str: any): string {
    let label = 'Start Appointment';
    if (str === false) {
      label = 'Canceled';
    }
    return label;
  }

  getItem() {
    const me = this;
    me.getItem$.emit();
  }

  deleteItem(id: string) {
    const me = this;
    me.deleteItem$.emit(id);
  }

  open(
    content: any,
    data: AppointmentModel.AppointmentInfo,
    readonly: boolean
  ) {
    const me = this;
    me.isAdd = false;
    me.selected = data;
    me.modalService.open(content);
    me.readonly = readonly;
  }

  close(content: any) {
    this.modalService.dismissAll(content);
  }

  reload() {
    const me = this;
    me.reload$.emit();
  }

  addNew(content: any) {
    const me = this;
    me.modalService.open(content);
    me.isAdd = true;
  }

  filterStatus(value: any) {
    const me = this;
    let result = me.items.filter((item) => item.isAppointment === value);
    me.filter = [...result];
    // hoi khi dung if
  }
}
