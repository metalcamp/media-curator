import {EntityRepository, Repository} from "typeorm";
import {User} from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    getAll(): Promise<User[]> {
        return this.manager
            .createQueryBuilder()
            .orderBy({user: 'ASC'})
            .getMany();
    }
}
