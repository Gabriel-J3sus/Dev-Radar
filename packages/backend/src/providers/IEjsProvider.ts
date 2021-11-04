type baseTemplate = {
    opts?: ejs.Options;
}
type mailTemplate = baseTemplate & {
    name: "CreateUserMailTemplate"
    args?: {
        username:string
    }
};
type jorgeTemplate = baseTemplate & {
    name: "CreateJorgeMailTemplate"
    args?: {
        pinto:string
    }
};
export type IEjsProvider = mailTemplate  | jorgeTemplate