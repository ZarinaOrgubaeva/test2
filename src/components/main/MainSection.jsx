import styled from "styled-components";

export const Section = () => {
  return (
    <Main>
      <Container>
        <h1>Зарабатывайте больше</h1>
        <h2>с WELBEX</h2>
        <p>Развиваем и контролируем продажи за вас</p>
      </Container>
      <Content>
        <p>
          Вместе c <span>БЕСПЛАТНОЙ </span> <span> КОНСУЛЬТАЦИЕЙ</span> мы
          дарим:
        </p>
        <Prize>
          <Prize1>
            <h4>ВИДЖЕТЫ</h4>
            <h6>30 готовых решений</h6>
            <h4>SKYPE АУДИТ</h4>
            <h6>отдела продаж и CRM системы</h6>
          </Prize1>
          <Prize2>
            <h4>DASHBOARD</h4>
            <h6>с показателями вашего бизнеса</h6>
            <h4> 35 ДНЕЙ </h4>
            <h6>использования CRM</h6>
          </Prize2>
        </Prize>
        <Btn>
          <button>Получить консультацию</button>
        </Btn>
      </Content>
    </Main>
  );
};

const Main = styled.main`
  color: #fff;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 451px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  margin-left: 7rem;
  z-index: 22;
  h1 {
    margin-top: 90px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #e4e5ea;
    z-index: 22;
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: 22;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #e4e5ea;
    margin-top: 30px;
    z-index: 22;
  }
  @media screen and (max-width: 451px) {
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    z-index: 22;
    > h1 {
      font-weight: 400;
      line-height: 80px;
      font-size: 89px;
    }
    > h2 {
      font-size: 5rem;
      line-height: 60px;
      margin-top: 2rem;
      width: 500px;
    }
    > p {
      font-family: "Montserrat";
      font-style: normal;
      font-size: 40px;
      text-align: left;
      color: #e4e5ea;
      width: 400px;
      line-height: 30px;
      width: 600px;
    }
  }
`;
const Content = styled.div`
  margin-right: 150px;
  margin-left: 490px;
  p {
    margin-top: 90px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #e4e5ea;
    span {
      background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%),
        #e4e5ea;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  @media screen and (max-width: 451px) {
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    > p {
      font-size: 3.5rem;
      line-height: 50px;
      width: 300px;
      text-align: left;
    }
  }
`;
const Prize = styled.div`
  display: flex;
`;
const Prize1 = styled.div`
  margin-right: 9rem;
  margin-top: 40px;
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    color: #e4e5ea;
  }
  @media screen and (max-width: 451px) {
    > h6 {
      display: none;
    }
  }
`;
const Prize2 = styled.div`
  margin-left: -5rem;
  margin-top: 40px;
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    color: #e4e5ea;
  }
  @media screen and (max-width: 451px) {
    > h6 {
      display: none;
    }
  }
`;
const Btn = styled.div`
  button {
    width: 262px;
    height: 61px;
    margin-top: 61px;
    background: #4077f3;
    color: #fff;
  }
  @media screen and (max-width: 451px) {
    display: none;
  }
`;
