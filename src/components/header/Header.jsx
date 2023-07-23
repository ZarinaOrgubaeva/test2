import { ReactComponent as Logo1 } from "../assets/logo/part1.svg";
import { ReactComponent as Logo2 } from "../assets/logo/part2.svg";
import { ReactComponent as Telegram } from "../assets/logo/telegram.svg";
import { ReactComponent as Viber } from "../assets/logo/viber.svg";
import { ReactComponent as Whatsapp } from "../assets/logo/whatsapp.svg";
import { ReactComponent as PurpleBall } from "../assets/logo/purpleball.svg";
import styled from "styled-components";
export const Header = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: '0%',
          left: '60%'
        }}
      >
        <PurpleBall />
      </div>
      <HeaderStyled>
        <nav>
          <div>
            <Logo1 />
            <Logo2 />
            <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
          </div>
          <ul>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
          </ul>
          <Container>
            <h4>+7 555 555-55-55</h4>
            <span>
              <Telegram />
            </span>
            <span>
              {" "}
              <Viber />
            </span>
            <span>
              {" "}
              <Whatsapp />
            </span>
          </Container>
        </nav>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.header`
  width: 1140px;
  height: 73px;
  nav {
    color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    margin-left: 7rem;
    div {
      p {
        width: 165px;
        height: 24px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #e4e5ea;
        margin-top: 0.2rem;
      }
    }
    ul {
      list-style: none;
      display: flex;
      li {
        margin-left: 1rem;
      }
    }
  }
  @media screen and (max-width: 451px) {
    > nav {
      margin-left: 2rem;
      > div {
        display: none;
      }
      font-size: 2.5rem;
      > ul {
        > li {
          margin-right: 1rem;
        }
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  span {
    margin-left: 1rem;
  }
`;
