import {EntityRepository, Repository, getConnection} from "typeorm";
import {MediaFileEntity} from "../entities/MediaFileEntity";

@EntityRepository(MediaFileEntity)
export class MediaFileRepository extends Repository<MediaFileEntity> {
    async store(rows: Array<MediaFileEntity>): Promise<void> {
        try {
            await Promise.all(rows.map(async r => {
                const conn = getConnection();
                const repo = conn.getRepository(MediaFileEntity);
                r.importedAt = new Date();

                repo.save(r);
            }));
        } catch (e) {
            console.error(e);
        }
    }
}
