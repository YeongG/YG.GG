import { accountStateType } from "../../reducer/account";
export const SUCCESS_ACCOUNT = "account/SUCCESS_ACCOUNT" as const;
export const FAIL_ACCOUNT = "account/FAIL_ACCOUNT" as const;
export const GET_ACCOUNT = "account/GET_ACCOUNT" as const;

export const getAccount = (payload:string) => ({
    type:GET_ACCOUNT,
    payload
})

export const successAccount = (payload:accountStateType) => ({
    type:SUCCESS_ACCOUNT,
    payload,
});

export const failAccount = () => ({
    type:FAIL_ACCOUNT,
});

export type accountAction = ( 
    | ReturnType<typeof successAccount> 
    | ReturnType<typeof failAccount>
);

export type getAccountSaga = ReturnType<typeof getAccount>;