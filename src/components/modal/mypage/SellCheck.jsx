
import useMypageApi from 'hooks/service/useMypage.service'
import { useEffect, useState } from 'react';
import { styled } from 'styled-components'





const SellCheck = ({chatUser, prod_idx, filter, setOpenMenu ,setHandleState}) => {

	const [token, setSocket] = useState('');
  const { mutate } = useMypageApi.useChangeState(prod_idx.toString(), token, filter);

  useEffect(() => {
    if (token !== '') {
			const confirmed = window.confirm('구매자를 확정하시겠습니까?');
			if(confirmed){
				mutate();
				setOpenMenu(false)
				setHandleState(false)
			}
    }
  }, [token, mutate]);

  const handleChageState = (user) => {
    const userId = user.User.token;
    setSocket(userId);
  };



  return(<>
  <S.Wrraper>
			<S.Container>
					<S.Text>구매자를 확정해주세요.</S.Text>
        <S.CheckList>
          {chatUser.map((user)=>
					<li
						onClick={() => handleChageState(user)}
					>{user.User.nick_name}</li>
					)}
        </S.CheckList>
			</S.Container>
		</S.Wrraper>
  </>)
}

export default SellCheck


const S = {}

S.Wrraper = styled.div`
	z-index: 50;
	position: relative;
	width: 200px;
	height: 200px;
	background-color: rgba(0,0,0,0.6);
	overflow-y:scroll ;
`
S.Container = styled.div`
padding: 20px 0;
`


S.Text = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	text-align: center;
	margin-bottom: 10px;
`

S.CheckList = styled.div`
  color: ${({ theme }) => theme.PALETTE.white};
	text-align: center;
	list-style: none;
	cursor: pointer;
	>li{
		padding: 3px 0;
	}

	:hover{
		background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`
