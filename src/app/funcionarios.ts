export class Funcionarios{

    funcionarioId: number;
    funcionarioNome: string;
    funcionarioSalario: number;
    funcionarioAlimentacao: number;
    funcionarioTransporte: number;
   
    constructor(funcionarioId:number, funcionarioNome:string, funcionarioSalario: number,  funcionarioAlimentacao: number, funcionarioTransporte:number){
    this.funcionarioId= funcionarioId;
    this.funcionarioNome= funcionarioNome;
    this.funcionarioSalario= funcionarioSalario;
    this.funcionarioAlimentacao= funcionarioAlimentacao;
    this.funcionarioTransporte= funcionarioTransporte;

}
exibirAluno(){
    return this.funcionarioId;
}
}
