import { io } from 'socket.io-client';
import type { SocketOptions, ManagerOptions, Socket } from 'socket.io-client';

// import { cookies } from './common.util';
import { baseUrl } from './axios.util';

export interface SocketRetData<T> {
  statusCode: number;
  data: T;
  message?: string;
  error?: any;
}

class SOCKET_UTIL {
  private socket: Socket;

  protected extraHeaders: ManagerOptions['extraHeaders'] = {
    baseUrl,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // Authorization: `Bearer ${cookies.get('accessToken')}`,
  };

  protected socketOptions: Partial<ManagerOptions & SocketOptions> = {
    // withCredentials: true,
    extraHeaders: this.extraHeaders,
  };

  constructor(url: string) {
    this.socket = io(`${baseUrl}${url}`, {
      ...this.socketOptions,
    });
  }

  public on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  public emit(event: string, args: any[], callback?: (data: any) => void) {
    this.socket.emit(event, args, callback);
  }

  public off(event: string) {
    this.socket.off(event);
  }
}

export default SOCKET_UTIL;
