import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';

@Pipe({
  name: 'travaux'
})
@Injectable()
export class TravauxPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
