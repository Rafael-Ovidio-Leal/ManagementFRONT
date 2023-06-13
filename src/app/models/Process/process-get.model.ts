import { AreaGetModel } from "../Area/area-get.model";

export class ProcessGetModel{
    processId!:number
    areaId!:number
    name!:string;
    area!: AreaGetModel
    responsible!:string;
    description!:string;
    tools!:string;
    technologies!:string;
    Status!:string
    CreatedAt!:Date
    UpdatedAt!:Date
}