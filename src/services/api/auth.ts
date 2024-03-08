import { BaseService } from "../BaseService.ts";

export class AuthService {
  static login = (data: ILogin, path: string) => {
    return BaseService.appClient(false).post(path, data);
  };
}