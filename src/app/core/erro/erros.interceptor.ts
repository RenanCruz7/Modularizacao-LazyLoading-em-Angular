import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro desconhecido'

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Erro do Cliente: ${error.error.message}`
        } else if (error.status === 404) {
          errorMessage = 'Recurso não encontrado'
        } else if (error.status === 500) {
          errorMessage = 'Erro interno do servidor'
        } else if (error.status === 401) {
          errorMessage = 'Não autorizado'
        }


        return throwError(() => new Error('Ops, Ocorreu um erro'))
      })
    )
  }
}
