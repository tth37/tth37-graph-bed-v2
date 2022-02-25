import {
  BadRequestException,
  Controller,
  Get,
  Head,
  Header,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { GraphService } from "./graph.service";

@Controller("g")
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    // const stream = createReadStream(file);
    // const buffer = file.buffer;
    return this.graphService.uploadImage(file);
  }

  @Get(":name")
  @Header("Content-Type", "image")
  @Header("Content-Disposition", "inline")
  downloadImage(@Param("name") name: string) {
    return this.graphService.downloadImage(name);
  }
}
