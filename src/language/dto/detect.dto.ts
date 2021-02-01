import { IsString } from 'class-validator';

export class DetectDto {
  @IsString()
  readonly text: string;
}
