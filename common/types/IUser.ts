import { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}
