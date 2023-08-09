import { Injectable, ErrorHandler } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private NotificationService: NotificationService) {}

  handleError(error: any): void {
    // You can perform custom error handling here
    console.error('An error occurred:', error);

    // Display a user-friendly error message
    this.NotificationService.showError('An unexpected error occurred. Please try again later.');

    // You can also log the error to a remote server for analysis
    // Example: this.logErrorToServer(error);
  }

  // Example method to log errors to a remote server
  private logErrorToServer(error: any): void {
    // Implement your logic here to send the error details to a server
    // For example, you can use an HTTP service to post the error data
  }
}
