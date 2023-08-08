import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { LoginI } from 'src/app/public/interfaces/LoginInterfaces';
import { AuthService } from 'src/app/public/Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'log-container',
    templateUrl: './log.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService]
})
export class LogComponent implements OnInit {
    valCheck: string[] = ['remember'];

    password!: string;


    constructor(public layoutService: LayoutService, private readonly router: Router, private readonly authService: AuthService, private formBuilder: FormBuilder, private messageService: MessageService,
        ) { }
    visible: boolean = true;
    changetype: boolean = true;

    animationOptions: AnimationOptions = {
        path: '/assets/animation/loginadmin3.json',
    };
    FormLogin!: FormGroup;
    ngOnInit() {
        this.buildForm();


    }
    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Proceso Exitoso' });
    }
    buildForm() {
        this.FormLogin = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        });
    }

    Login(form: LoginI) {
        if (this.FormLogin.invalid) {
            // Marcar los campos del formulario como tocados para mostrar los mensajes de error
            Object.values(this.FormLogin.controls).forEach((control) =>
                control.markAsTouched(),
            );
            this.messageService.add({ severity: 'success', summary: 'Proceso Erroneo', detail: 'Inicio de sesión Erronieo' });
            return;

        } else {
            this.authService.Login(form).subscribe((data) => {
                this.authService.setToken(data.access_token);

                this.messageService.add({ severity: 'success', summary: 'Proceso Exitoso', detail: 'Inicio de sesión exitoso' });
                this.router.navigate(['/home']);
                // this.router.navigateByUrl('home');
                //   window.location.href = 'home';
            });
        }

    }

    viewpass() {
        this.visible = !this.visible;
        this.changetype = !this.changetype;
    }
    // constructor(private readonly router: Router,private readonly authService: AuthService,
    //   private formBuilder: FormBuilder,private notificacion:ToastrService,) {}

    //   visible:boolean = true;
    //   changetype:boolean = true;

    // //   animationOptions: AnimationOptions = {
    // //     path: '/assets/animation/loginadmin3.json',
    // //   };
    //   FormLogin!: FormGroup;
    //   ngOnInit() {
    //     this.buildForm();


    //   }

    //   buildForm() {
    //     this.FormLogin = this.formBuilder.group({
    //       email: ['', [Validators.required, Validators.email]],
    //       password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    //     });
    //   }





    //   Login(form: LoginI) {
    //     if (this.FormLogin.invalid) {
    //       // Marcar los campos del formulario como tocados para mostrar los mensajes de error
    //       Object.values(this.FormLogin.controls).forEach((control) =>
    //         control.markAsTouched(),
    //       );
    //       return;
    //     } else {
    //       this.authService.Login(form).subscribe((data) => {
    //         this.authService.setToken(data.access_token);
    //         this.notificacion.success("Inicio de sesión exitoso",'Proceso Exitoso');
    //         // this.router.navigate(['home']);
    //         // this.router.navigateByUrl('home');
    //         window.location.href = 'home';
    //       });
    //     }

    //   }

    //   viewpass(){
    //     this.visible = !this.visible;
    //     this.changetype = !this.changetype;
    //   }
}
