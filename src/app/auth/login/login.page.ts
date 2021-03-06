import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { ToastController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup
  submitted=false;

  constructor(private router:Router,
    private auth:AuthService,
    public toastController: ToastController,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute) {
   
  }

 ngOnInit() {
    this.loginForm= this.formBuilder.group(
      {
        user:["",[Validators.required,Validators.minLength(6)]],
        pass:["",[Validators.required,Validators.minLength(6)]]
      }
    )
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  get form(){
    return this.loginForm.controls;
  }
  onSubmit(){
    console.log('uuuu');
    
    this.submitted=true;
    if (this.loginForm.invalid) {
      this.presentToast('verifica los datos');
      return;
    }    
    this.auth.postLogin(this.loginForm.value).subscribe(resp=>{
      console.log(resp);
      if (resp.type > 0) {
        console.log(resp.msg);
        this.auth.addData({usr:resp.usr,curren:{username:resp.usr.id,token:resp.jwt}});
        this.router.navigate([this.route.snapshot.params.ruta]);
        
      }else{
        console.log(resp.msg);
      }
      this.presentToast(resp.msg);

    })
    
  }
  onReset(){
    this.submitted=false;
    this.loginForm.reset();
  }
  back(){
    this.router.navigate([this.route.snapshot.params.ruta]);
  }

  
 


}
