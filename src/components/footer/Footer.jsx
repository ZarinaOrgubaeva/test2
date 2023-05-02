import React from "react";
import styled from "styled-components";
import { ReactComponent as Telegram } from "../assets/logo/telegram.svg";
import { ReactComponent as Viber } from "../assets/logo/viber.svg";
import { ReactComponent as Whatsapp } from "../assets/logo/whatsapp.svg";
export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <div>
          <ul>
            <h5> O КОМПАНИИ</h5>
            <br />
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div>
          <ul>
            <h5>МЕНЮ</h5>
            <li>Расчёт стоимости</li>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интерграции</li>
            <li>Наши клиенты</li>
          </ul>
          <StyleList>
            <li>Кейсы</li>
            <li>Благодарственные письма</li>
            <li>Сертификаты</li>
            <li>Блог на YouTube</li>
            <li>Вопрос / Ответ</li>
          </StyleList>
        </div>
        <div>
          <ul>
            <h5>Контакты</h5>
            <li>+7 555 555-55-55</li>
            <li>
              <Telegram />
              <Viber />
              <Whatsapp />
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
      </div>
      <p>©WELBEX 2022. Все права защищены.Политика конфиденциальности </p>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  color: #fff;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 69px;
  div {
    display: flex;
    justify-content: space-between;
    div {
      ul {
        list-style: none;
        h5 {
          width: 106px;
          height: 17px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #656566;
          margin-bottom: 20px;
        }
        li {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #e4e5ea;
        }
      }
    }
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: #e4e5ea;
  }
  @media screen and (max-width: 451px) {
    > p {
      width: 500px;
      text-align: left;
      font-size: 25px;
      line-height: 30px;
    }
    > div {
      flex-direction: column;
      width: 600px;
      > div {
        > ul {
          > h5 {
            font-size: 2rem;
            width: 300px;
            line-height: 40px;
          }
          > li {
            font-size: 2rem;
            line-height: 45px;
          }
        }
      }
    }
  }
`;

const StyleList = styled.ul`
  margin-top: 2.5rem;
  margin-left: 2.5rem;
  list-style: none;
  li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e4e5ea;
  }
  @media screen and (max-width: 451px) {
    > li {
      line-height: 20px;
      margin-left: 7rem;
    }
  }
`;
