import userService from 'apis/service/user.api'
import { useMutation } from 'react-query'


const postLoginApi = () => {
  const  { signIn }  = userService();

  const postLogin = () => {
    const {mutate} = useMutation(signIn)

    mutate({user_email, user_password}, {
      onSuccess: data => {
        console.log(data) //성공시 데이터 
      },
      onError: error => {
        console.error(error) //실패시 데이터
      },
      onSettled: () => {
        console.log('settled') // 성공이든 실패이든 무조건!
      },
    })
  }
  return {postLogin}
}

export default postLoginApi