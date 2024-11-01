import { Module } from '@nestjs/common';
import { BooksService } from './book.service';
import { BooksController } from './book.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
