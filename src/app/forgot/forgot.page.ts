import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const Swal: any;
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  selectedAddressIndex = 0;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  confirmpassword() {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire({
      title: 'Password has been successfully changed',
      text: '',
      timer: 3000,
      icon: 'success',
    });
    this.router.navigate(['/login']);
  }
}
