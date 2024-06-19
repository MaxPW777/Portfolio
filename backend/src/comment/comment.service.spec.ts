import { Test, TestingModule } from '@nestjs/testing';
import { Commentervice } from './comment.service';

describe('CommentService', () => {
  let service: Commentervice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Commentervice],
    }).compile();

    service = module.get<Commentervice>(Commentervice);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
