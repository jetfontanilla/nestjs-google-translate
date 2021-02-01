import { Injectable } from '@nestjs/common';
import { v2 } from '@google-cloud/translate';
import { CONFIG } from '../config/config';
import {
  DetectResult,
  LanguageResult,
} from '@google-cloud/translate/build/src/v2';

@Injectable()
export class GcpTranslateService {
  async translate(
    text: string,
    targetLanguage: string,
    sourceLanguage?: string,
  ): Promise<string> {
    const translateClient = new v2.Translate({
      projectId: CONFIG.googleCloud.projectId,
    });

    const [translation] = await translateClient.translate(text, {
      from: sourceLanguage,
      to: targetLanguage,
    });

    return translation;
  }

  async detect(text: string): Promise<DetectResult> {
    const translateClient = new v2.Translate({
      projectId: CONFIG.googleCloud.projectId,
    });
    const [detections] = await translateClient.detect(text);

    return detections;
  }

  async supportedLanguages(
    displayLanguage?: string,
  ): Promise<LanguageResult[]> {
    const translateClient = new v2.Translate({
      projectId: CONFIG.googleCloud.projectId,
    });
    const [languages] = await translateClient.getLanguages(displayLanguage);

    return languages;
  }
}
