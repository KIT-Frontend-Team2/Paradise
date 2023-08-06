import { styled } from 'styled-components'


const Calendar = ({setStartDate, setEndDate, end,  start}) => {


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };


  return (
    <S.Wrapper>
      <div>
        <S.Label  htmlFor="start">시작날짜</S.Label>
        <input type="date" id="start" value={start} onChange={handleStartDateChange} />
      </div>
      <div>
        <S.Label htmlFor="end">종료날짜</S.Label>
        <input type="date" id="end" value={end} onChange={handleEndDateChange} />
      </div>
    </S.Wrapper>
  );
};

export default Calendar;

const S = {}
S.Wrapper = styled.div`
  display: flex;
  >div{
    margin-right: 20px;
  }

`

S.Label = styled.label`
  margin-right: 10px;
`

