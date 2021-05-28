import {EntityRepository, Repository} from "typeorm";
import {MediaFileEntity} from "../entities/MediaFile.entity";

@EntityRepository(MediaFileEntity)
export class MediaFileRepository extends Repository<MediaFileEntity>{
    getAll(): Promise<MediaFileEntity[]> {
        return this.manager
            .createQueryBuilder()
            .orderBy({user: 'ASC'})
            .getMany();
    }
}
