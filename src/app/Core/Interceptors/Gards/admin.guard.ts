import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServicesService } from 'src/app/auth/Services/auth-services.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const _Router = inject(Router)
  const _AuthServicesService = inject(AuthServicesService)

  const role = _AuthServicesService.role

  if(localStorage.getItem('userToken') !== null && role == 'SuperAdmin'){
    return true;
  }
  else {
    _Router.navigate(['/auth']);
    return false;
  }
};
