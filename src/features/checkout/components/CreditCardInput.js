import React from "react";
import { LiteCreditCardInput } from "react-native-input-credit-card";
import { cardTokenRequest } from "../../../services/checkout/checkoutService";

export const CreditCardInput = ({ name = "Isaiah Obi" }) => {
  const onChange = async (form) => {
    const { values, status } = form;
    const isIncomplete = Object.values(status).includes("incomplete");

    const expiry = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };

    const tokenInfo = await cardTokenRequest({ card });
    //console.log(tokenInfo);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
