export const GET_ACCOUNT = "account/GET_ACCOUNT" as const;
export const SUCCESS_ACCOUNT = "account/SUCCESS_ACCOUNT" as const;
export const FAIL_ACCOUNT = "account/FAIL_ACOUNT" as const;

export interface AccountType {
    id:string,
    accountId:string,
    puuid:string,
    name:string,
    profileIconId:number,
    revisionDate:number,
    summonerLevel:number
}

export const getAccount = (payload:string) => ({
    type:GET_ACCOUNT,
    payload
});

export const successAccount = (payload:AccountType) => ({
    type:SUCCESS_ACCOUNT,
    payload
});

export const failAccount = () => ({
    type:FAIL_ACCOUNT,
});

export type AccountActionType = (
    | ReturnType<typeof successAccount>
    | ReturnType<typeof failAccount>
);

export type GetAccountSagaType = ReturnType<typeof getAccount>;