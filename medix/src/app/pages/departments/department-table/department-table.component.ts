import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DepartmentModel } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
})
export class DepartmentTableComponent extends BaseComponent implements OnInit {
  @Input() items: DepartmentModel.DepartmentInfo[] = [];

  p: number = 1;

  constructor() {
    super();
  }

  ngOnInit() {
    const me = this;
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
