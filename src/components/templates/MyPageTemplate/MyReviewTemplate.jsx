import React, {useState} from 'react';
import {styled} from "styled-components";
import {useSearchParams} from "react-router-dom";
import reviewService from "../../../hooks/service/review.service";
import Pagination from "../../ui/molecules/Pagination/Pagination";
import Button from "../../ui/atoms/Button/Button";
import ReviewProducts from "../../ui/organisms/ReviewProducts/ReviewProducts";
import ReviewIsNullProducts from "../../ui/organisms/ReviewProducts/ReviewIsNullProducts";

const MyReviewTemplate = () => {
    const [searchParam, _] = useSearchParams()
    const page = searchParam.get('page') || 1
    const {data} = reviewService.getReview(page)
    const {pagination, reviewList} = data.data
    const [selectState, setSelectState] = useState(false)
    const reviewIsNullProducts = reviewList.filter(review => review.Review === null)
    const reviewProducts = reviewList.filter(review => review.Review !== null)

    return (
        <S.Wrapper>
            <S.Title>리뷰 관리</S.Title>
            <S.Content>
                <S.Filter>
                    <S.Left>
                        <Button
                            type="button"
                            label={'리뷰 작성'}
                            variant={!selectState ? 'primary-outlined' : 'outlined'}
                            size={'small'}
                            onClick={(() => setSelectState(false))}
                        />
                        <Button
                            type="button"
                            label={'작성한 리뷰'}
                            size={'small'}
                            variant={selectState ? 'primary-outlined' : 'outlined'}
                            onClick={(() => setSelectState(true))}
                        />
                    </S.Left>
                </S.Filter>
                {!selectState ? <ReviewIsNullProducts reviewIsNullProducts={reviewIsNullProducts}/> : <ReviewProducts reviewProducts={reviewProducts}/>}
            </S.Content>
            <Pagination page={page} item_length={pagination.page_size} total={pagination.count}/>
        </S.Wrapper>
    )
};

export default MyReviewTemplate;

const S = {}

S.Wrapper = styled.div`
  width: ${({theme}) => (theme.isDesktop ? '873px' : '100%')};
  min-height: 100vh;
`

S.Title = styled.h2`
  font-size: 24px;
  font-weight: ${({theme}) => theme.FONT_WEIGHT.medium};
  text-align: left;
  display: ${({theme}) => (theme.isDesktop ? 'block' : 'none')};
`
S.Content = styled.div``

S.Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({theme}) => theme.PALETTE.black};
`
S.Left = styled.div`
  gap: 15px;
  display: flex;
`