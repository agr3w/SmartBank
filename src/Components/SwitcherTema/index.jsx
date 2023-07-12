import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

const Claro = <Icone src={ThemeOn} alt="tema claro" />;
const Escuro = <Icone src={ThemeOff} alt="tema escuro" />;

export default ({ tema }) => (tema ? Escuro : Claro);
