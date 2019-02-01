import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService,
              private toastr : ToastrService) { }

  ngOnInit() {
    this.service.getEmployees();
  }

  populateForm(emp : Employee){
    this.service.formData = emp;
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.getEmployees();
      this.toastr.warning('Deleted Successfully!!','Employee Register');
    });
  }
  }
}
