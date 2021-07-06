import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Very Nice!';
=======
    return 'Hello World!';
>>>>>>> e35d04e (Initial Commit)
  }
}
