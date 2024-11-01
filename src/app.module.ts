import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gutenberg:gutenberg@cluster0.lq9rh.mongodb.net/gutenberg/?retryWrites=true&w=majority&appName=Cluster0'), BooksModule],
})
export class AppModule {}
