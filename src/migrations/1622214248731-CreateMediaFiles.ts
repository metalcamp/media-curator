import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMediaFiles1622214248731 implements MigrationInterface {
    name = 'CreateMediaFiles1622214248731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."media_files" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deleted_at" TIMESTAMP WITH TIME ZONE, "id" SERIAL NOT NULL, "filepath" text NOT NULL, "title" text NOT NULL, "artist" text NOT NULL, "album" text NOT NULL, "year" text NOT NULL, "genre" text NOT NULL, "rating" text, "grouping" text, "mood" text, "old_data" jsonb, "imported_at" TIMESTAMP, "synced_at" TIMESTAMP, CONSTRAINT "PK_f08644aa605f466d17363c19bea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."media_files"`);
    }

}
