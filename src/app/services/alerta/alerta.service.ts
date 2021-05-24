import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(type: string, title: string, content: string): void {
    this.notification.create(type, title, content);
  }
}
