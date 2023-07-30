import React, { useState } from 'react'
import {styled}  from 'styled-components'
import Button from 'components/ui/atoms/Button/Button'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SellMenuBar = () => {

const [changeIcon, setChangeIcon] = useState(true)
const [openMenu, setOpenMenu] = useState(false)

  const handleIcon = () => {
    setChangeIcon(!changeIcon);
    setOpenMenu(!openMenu)
  };


return(
  <>
  <S.Toggle onClick={handleIcon}>
      {changeIcon ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
  </S.Toggle>
    {openMenu ? (
      <S.Wraaper>
        <S.Container>
          <Button
            style={{ width: '199px' , height: '42px', fontSize:'13px'}}
            label={'판매완료로 변경'}
            variant={'outlined'}
          />
          <S.Bottom>
            <Button 
              style={{ width: '96px', height: '42px' , fontSize:'13px'}}
              label={'수정'}
              variant={'outlined'}
            
            />
            <Button
              style={{ width: '96px', height: '42px', fontSize:'13px' }}
              label={'수정'}
              variant={'outlined'}
            />
          </S.Bottom>
      </S.Container>
    </S.Wraaper>
) : ''}
</>
)
}


export default SellMenuBar


const S = {}

S.Wraaper = styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.PALETTE.white};
`
S.Toggle = styled.div`
	position: absolute;
	top: 0;
  right:0;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.PALETTE.background.white};
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 200px;
`

S.Container=styled.div`
width: 200px;
position: absolute;
top: 0;
right: 0;
font-size: 13px;
z-index: 1000;
`
S.Bottom = styled.div`
display:  flex;
justify-content: space-between;
`
