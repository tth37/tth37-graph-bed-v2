import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";
import { GraphController } from "./graph.controller";
import { FileModule } from "src/file/file.module";

@Module({
  imports: [FileModule],
  providers: [GraphService],
  controllers: [GraphController],
})
export class GraphModule {}
