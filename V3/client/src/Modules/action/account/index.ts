const GET_ACCOUNT:string = "account/GET_ACCOUNT" as const;
const SUCCESS_ACCOUNT:string = "account/SUCCESS_ACCOUNT" as const;
const FAIL_ACCOUNT:string = "account/FAIL_COUNT" as string;

const successAccount = (payload) => ({
    type:SUCCESS_ACCOUNT,
    payload,
});

const failAccount = (payload) => ({
    type:FAIL_ACCOUNT,
    payload
});

type accountAction = ReturnType<
    | typeof successAccount
    | typeof failAccount    
>; 