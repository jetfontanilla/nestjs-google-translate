import { IsString } from 'class-validator';

export class LanguagesDto {
  @IsString()
  readonly displayLanguage?: string;
}
