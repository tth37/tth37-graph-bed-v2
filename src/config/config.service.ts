import { Injectable } from "@nestjs/common";
import * as fs from "fs-extra";
import * as yaml from "js-yaml";

interface OssConfig {
  accessKeyId: string;
  accessKeySecret: string;
  bucket: string;
  endpoint: string;
}

interface Config {
  oss: OssConfig;
}

@Injectable()
export class ConfigService {
  config: Config;
  constructor() {
    this.config = yaml.load(
      fs.readFileSync("./config.yml", { encoding: "utf-8" }),
    ) as Config;
    console.log(this.config);
  }
}
