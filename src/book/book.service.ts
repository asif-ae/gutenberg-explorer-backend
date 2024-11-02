import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';

@Injectable()
export class BooksService {
  constructor(private readonly httpService: HttpService) {}

  async getBookContent(id: string): Promise<{
    content: string;
  }> {
    const contentUrl = `https://www.gutenberg.org/files/${id}/${id}-0.txt`;

    try {
      const contentResponse = await this.httpService
        .get(contentUrl)
        .toPromise();

      const fileContent = contentResponse.data;

      return {
        content: fileContent,
      };
    } catch (error) {
      throw new Error('Error fetching data from Gutenberg API');
    }
  }

  async getBookMetadata(id: string): Promise<{
    ['Cover Image']: string;
    ['Author']: string;
    ['Title']: string;
    ['Original Publication']: string;
    ['Credits']: string;
    ['Language']: string;
    ['Category']: string;
    ['Ebook No.']: string;
    ['Release Date']: string;
    ['Copyright Status']: string;
    ['Downloads']: string;
    // metadataHtml: string;
  }> {
    const metadataUrl = `https://www.gutenberg.org/ebooks/${id}`;

    try {
      const metadataResponse = await this.httpService
        .get(metadataUrl)
        .toPromise();

      const fileMetadata = metadataResponse.data;

      // Load the HTML into cheerio
      const $ = cheerio.load(fileMetadata);

      // Extracting metadata
      const metadata = {
        ['Cover Image']: $('.cover-art').attr('src'),
        ['Author']: $('tr:contains("Author") td').text().trim(),
        ['Title']: $('tr:contains("Title") td').text().trim(),
        ['Original Publication']: $('tr:contains("Original Publication") td')
          .text()
          .trim(),
        ['Credits']: $('tr:contains("Credits") td').text().trim(),
        ['Language']: $('tr:contains("Language") td').text().trim(),
        ['Category']: $('tr:contains("Category") td').text().trim(),
        ['Ebook No.']: $('tr:contains("EBook-No.") td').text().trim(),
        ['Release Date']: $('tr:contains("Release Date") td').text().trim(),
        ['Copyright Status']: $('tr:contains("Copyright Status") td')
          .text()
          .trim(),
        ['Downloads']: $('tr:contains("Downloads") td').text().trim(),
      };

      return {
        ...metadata,
        // metadataHtml: fileMetadata,
      };
    } catch (error) {
      console.log({ error });
      throw new Error('Error fetching data from Gutenberg API');
    }
  }
}
