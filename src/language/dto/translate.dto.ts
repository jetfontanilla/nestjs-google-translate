import { IsString } from 'class-validator';

export class TranslateDto {
  @IsString()
  readonly text: string;

  @IsString()
  readonly to: string;

  @IsString()
  readonly from?: string;
}
