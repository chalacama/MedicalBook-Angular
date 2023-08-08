import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './pages/log/container/log.component';
import { PublicComponent } from './public.component'
import { PublicRoutingModule } from './public-routing.module';
import { ErrorComponent } from './pages/error/error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from '../demo/components/auth/login/login.component';
import { LoginModule } from '../demo/components/auth/login/login.module';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [
    PublicComponent,
    LogComponent,
    ErrorComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,

    PasswordModule,
    ToastModule,
    MessagesModule


  ]
})
export class PublicModule { }
