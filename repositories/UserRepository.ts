import db from "../db/mongo.ts";
import { IUser } from "../types.ts";

class UserRepository {
  readonly userCollection = db.collection("users");

  async findAll() {
    return await this.userCollection.find();
  }

  //   async findOne(id: string) {
  //     return this.userCollection.findOne({ _id: { $oid: id } });
  //   }

  async insertOne(user: IUser) {
    return await this.userCollection.insertOne(user);
  }

  //   update(id: string, data: any) {
  //     return this.userCollection.updateOne({ _id: { $oid: id } }, { $set: data });
  //   }

  //   delete(id: string) {
  //     return this.userCollection.deleteOne({ _id: { $oid: id } });
  //   }
}

export default UserRepository;
