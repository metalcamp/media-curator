import {Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {TimestampedEntity} from "../interfaces/TimestampedEntity";

export abstract class TimestampedBaseEntity implements TimestampedEntity {
    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'created_at'})
    public createdAt?: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'updated_at'
    })
    public updatedAt?: Date;

    @Column({type: 'timestamptz', nullable: true, name: 'deleted_at'})
    public deletedAt?: Date;
}
