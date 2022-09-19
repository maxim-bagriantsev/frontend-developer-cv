import React from "react";
import classNames from "classnames/bind";
import styles from "./Description.module.scss";
import "antd/dist/antd.css";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);


const Description = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className={cx("hero")}>
        {t("description1")}
      </p>
      <p className={cx("hero")}> {t("description2")}</p>;
      <p className={cx("hero")}>  {t("description3")}</p>;
    </>


  )
    ;
};

export default Description;