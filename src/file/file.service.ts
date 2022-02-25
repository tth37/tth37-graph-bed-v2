import { Injectable } from "@nestjs/common";
import * as OSS from "ali-oss";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class FileService {
  ossClient: OSS;
  constructor(private readonly configService: ConfigService) {
    const ossConfig = this.configService.config.oss;
    this.ossClient = new OSS(ossConfig);
    console.log(this.ossClient);
  }

  async uploadFile(name: string, file: Express.Multer.File) {
    await this.ossClient.put(name, file.buffer);
    console.log(name);
  }

  getFileStream(name: string) {
    return this.ossClient.getStream(name);
  }
}
