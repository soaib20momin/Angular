import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service : EmployeeService,
              private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      EmpCode : '',
      EmpName : '',
      Position : '',
      Mobile : ''
    }  
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully!!','Employee Register');
      this.resetForm(form);
    });
  }


} 
