import {useCallback} from "react";
import useMove from "../useMovePage";
import {HTTP_STATUS_CODE} from "../../consts/api";
import {HTTPError} from "../../apis/HTTPError";

export const useResetError = () => {

    const handleErrorReset = useCallback(
        (error) => {
            if (error instanceof Error && !(error instanceof HTTPError)) {
                useMove.RELOAD()
                return;
            }

            if (error.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
                useMove.RELOAD()
            } else {
                useMove.linkMainPage()
            }
        },
        []
    );

    return { handleErrorReset };
};
