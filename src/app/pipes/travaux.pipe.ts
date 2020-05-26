import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';

/**
 * Pipe
 */
@Pipe({
  name: 'travaux'
})
@Injectable()

export class TravauxPipe implements PipeTransform {


  /**
   * Creates an instance of travaux pipe.
   * @param sanitizer 
   */
  constructor(private sanitizer:DomSanitizer){}


  /**
   * Transforms travaux pipe
   * @param value 
   * @param args 
   * @returns transform 
   */
  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
