import React from "react";

import { FooterReportButton, Footer } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function AuthFooter() {
  return (
    <>
      <Footer>
        <FooterReportButton>
          <MaterialIcons name="feedback" size={32} color="#a1a1a1" />
        </FooterReportButton>
      </Footer>
    </>
  );
}
