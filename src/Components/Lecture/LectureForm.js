import React, { Component } from "react";
import styled from "styled-components";

class LectureForm extends Component {
  render() {
    const { format } = this.props;
    return (
      <Wrapper>
        <Content>
          <LectureImg>
            <img src="https://cdn.class101.net/images/2f0d19c8-5dad-4ecd-a642-45f91e95fbeb/375xauto.webp" />
          </LectureImg>
          <Tags>
            <span>라이프 스타일</span>
            <span>프랑스어는 김서현</span>
          </Tags>
          <Title>
            [프랑스어 입문] 루이비통과 샤넬 대신 프랑스어! 프랑스 문화!
          </Title>
          {format.type === "lectureSoon" && (
            <StatusTo>
              💖<span>139</span>% 달성
            </StatusTo>
          )}
        </Content>
        {format.type === "lectureSoon" ? (
          <>
            <Duedate>
              응원 마감까지
              <LeftDate>
                <span className="days">3</span>일 남음
              </LeftDate>
            </Duedate>
            <Button>응원하기</Button>
          </>
        ) : (
          <PriceInfo>
            <BeforePrice>
              <span className="befPrice">199,000원</span>
              <span className="discountRate">35%</span>
            </BeforePrice>
            <FinalPrice>
              <span className="finlPrice">
                월 <span>25,740원</span>
              </span>
              <span className="instMonth">
                <span>(5개월)</span>
              </span>
            </FinalPrice>
          </PriceInfo>
        )}
      </Wrapper>
    );
  }
}

export default LectureForm;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LectureImg = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Content = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
`;

const Tags = styled.div`
  padding: 10px 0px;
  font-weight: 700;
  font-size: 11px;
  span:not(:last-child) {
    &:after {
      content: "•";
    }
  }
`;
const Title = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;
const StatusTo = styled.div`
  font-weight: 700;
  font-size: 11px;
  color: rgb(253, 48, 73);
`;
const Duedate = styled.div`
  padding: 15px 0px;
  font-size: 11px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
`;
const LeftDate = styled.span`
  padding-left: 5px;
  color: black;
  font-weight: 400;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(255, 77, 0, 0.1);
  color: rgb(255, 77, 0);
  &:hover {
    background-color: rgba(255, 77, 0, 0.2);
  }
`;
const PriceInfo = styled.div`
  font-size: 11px;
  font-weight: 700;
  div:first-child {
    padding: 10px 0px;
  }
`;

const BeforePrice = styled.div`
  .befPrice {
    text-decoration: line-through;
    opacity: 0.6;
  }
  .discountRate {
    padding-left: 3px;
    color: red;
  }
`;
const FinalPrice = styled.div`
  .finlPrice {
    font-size: 14px;
  }
  .instMonth {
    padding-left: 3px;
    font-weight: 100;
  }
`;