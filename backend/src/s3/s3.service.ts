import {Injectable} from '@nestjs/common';

import {v4 as uuidv4} from 'uuid';
import {S3} from 'aws-sdk'
import * as process from "node:process";

@Injectable()
export class S3Service {
    private s3: S3;
    private readonly bucketName: string;

    constructor() {
        this.s3 = new S3({
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },

            region: process.env.AWS_REGION,
        });
        this.bucketName = process.env.S3_BUCKET_NAME;
    }

    async uploadFile(file : Express.Multer.File): Promise<string> {
        const key = uuidv4();
        await this.s3.upload({
            Bucket: this.bucketName,
            Body: file.buffer,
            Key: key,
        }).promise();
        return key;
    }

    async deleteFile(key: string): Promise<void> {
        await this.s3.deleteObject({
            Bucket: this.bucketName,
            Key: key,
        }).promise();
    }
}
