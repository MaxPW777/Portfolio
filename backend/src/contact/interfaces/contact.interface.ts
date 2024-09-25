import { IContactRequest } from '@common/types/IContactRequest';
import { Document } from 'mongoose';

export interface IContactRequestDocument extends Document, IContactRequest {}
