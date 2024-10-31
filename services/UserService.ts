import UserRepositoy from "../repositories/UserRepository.ts";
import { IUser } from "../types.ts";

class UserService {
  readonly userRepository = new UserRepositoy();

  getUsers = async () => {
    return await this.userRepository.findAll();
  };

  createUser = async (user: IUser) => {
    return await this.userRepository.insertOne(user);
  };
}

export default UserService;
