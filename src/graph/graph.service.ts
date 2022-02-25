import {
  BadRequestException,
  Injectable,
  StreamableFile,
} from "@nestjs/common";
import { FileService } from "src/file/file.service";
import { v4 as uuid } from "uuid";

export function isImageFile(file: Express.Multer.File) {
  return file.mimetype.startsWith("image");
}

export function getImageType(file: Express.Multer.File) {
  switch (file.mimetype) {
    case "image/bmp":
      return "bmp";
    case "image/gif":
      return "gif";
    case "image/jpeg":
      return "jpg";
    case "image/svg+xml":
      return "svg";
    case "image/x-icon":
      return "ico";
    case "image/png":
      return "png";
    default:
      return "";
  }
}

@Injectable()
export class GraphService {
  constructor(private readonly fileService: FileService) {}

  async uploadImage(file: Express.Multer.File) {
    if (!file || !isImageFile(file)) throw new BadRequestException();
    const name = uuid() + "." + getImageType(file);
    try {
      await this.fileService.uploadFile(name, file);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async downloadImage(name: string) {
    const file = await this.fileService.getFileStream(name);
    return new StreamableFile(file.stream);
  }
}
