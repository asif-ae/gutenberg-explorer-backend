import { Body, Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './book.service';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('getContent')
  async fetchContent(@Query('id') id: string) {
    const bookId = id || '74650'; // Default ID if not provided
    const result = await this.booksService.getBookContent(bookId);
    return result;
  }

  @Get('getMetadata')
  async fetchMetadata(@Query('id') id: string) {
    const bookId = id || '74650'; // Default ID if not provided
    const result = await this.booksService.getBookMetadata(bookId);
    return result;
  }
}
