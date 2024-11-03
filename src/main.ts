import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Allow all origins (use with caution in production)
    // origin: [
    //   'http://localhost:3000',
    //   'https://gutenberg-explorer-frontend.vercel.app',
    // ], // Replace with your frontend URL
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
