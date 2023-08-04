import userService from "apis/service/user.api"
import { useMutation } from "react-query"


const useMypageApi = {

  //비밀번호 수정 
  useChangePw :  pw => {
    const { mutate} = useMutation(
      () => userService.changeUserPassword(pw),
      {
        onSuccess: () => {
          alert('비빌번호 변경에 성공하셨습니다.')
        },
        onError: () => {
          alert('비밀번호 변경에 실패하셨습니다.')
        }
      }
    )
    return {mutate}
  }

}

export default useMypageApi