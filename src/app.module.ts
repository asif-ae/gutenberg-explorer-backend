import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './book/book.module';
import { SambaNovaConfigService } from './config/sambanova.config';
import { TextAnalyzerController } from './text-analyzer/text-analyzer.controller';
import { TextAnalyzerModule } from './text-analyzer/text-analyzer.module';
import { TextAnalyzerService } from './text-analyzer/text-analyzer.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    BooksModule,
    TextAnalyzerModule
  ],
  providers: [SambaNovaConfigService, TextAnalyzerService],
  controllers: [TextAnalyzerController],
})
export class AppModule {}
