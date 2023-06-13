import { ProcessGetModel } from "../Process/process-get.model";

export class AreaGetModel{
    areaId!:number
    name!:string;
    responsible!:string;
    description!:string;
    tools!:string;
    technologies!:string;
    Status!:string
    Process?: ProcessGetModel
    CreatedAt!:Date
    UpdatedAt!:Date
}