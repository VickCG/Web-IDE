import axios, { AxiosResponse } from "axios";

export interface IExecScriptRequest {
    script: string | any;
}

export interface IExecScriptResponse {
    data: string | any;
}

export interface IExecScriptResponseError {
    error: string | any;
}

const postRequest = async (uri: string, payload: Object) => {
    try {
        const fullUri: string = `${process.env.REACT_APP_SERVER_BASE_URL}/${uri}`;
        const response: AxiosResponse = await axios.post(fullUri, payload);
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const postExecScript = async (payload: IExecScriptRequest) => {
    return await postRequest('exec-script', payload);
};
