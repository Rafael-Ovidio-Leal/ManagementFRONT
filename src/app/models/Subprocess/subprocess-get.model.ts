import { ProcessGetModel } from "../Process/process-get.model";

export class SubprocessGetModel{
    subprocessId!:number;
    processId!:number;
    fatherId!:number;
    fatherName!:string
    name!:string;
    process!: ProcessGetModel;
    subprocess!: SubprocessGetModel;
    responsible!:string;
    description!:string;
    tools!:string;
    technologies!:string;
    Status!:string;
    CreatedAt!:Date;
    UpdatedAt!:Date;
}