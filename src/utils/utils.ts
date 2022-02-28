import { HttpException } from '@nestjs/common';

export const utils = {
  convertArrayDocumentMongoose(array: Array<any>) {
    return array.map((doc) => doc.toJSON());
  },
  makeException(errors: [String], statusCode: number) {
    throw new HttpException(errors, statusCode);
  },
};
