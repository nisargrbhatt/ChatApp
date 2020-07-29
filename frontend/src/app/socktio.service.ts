import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocktioService {
  // socket;
  constructor() {}

  // setupSocketConnection() {
  //   this.socket = io(environment.SOCKET_ENDPOINT);
  //   this.socket.emit('my message', 'Hello from frontend');
  // }
}
