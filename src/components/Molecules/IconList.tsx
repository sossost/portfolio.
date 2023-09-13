"use client";

import React from "react";
import { CONTACT_LIST } from "@/constants/contact";

import HoverControlWrapper from "../Atoms/HoverControlWrapper";

const IconList = () => {
  return (
    <div className="flex gap-8 pt-8 pb-16">
      {CONTACT_LIST.map((contact) => {
        const Icon = contact.icon;
        return (
          <HoverControlWrapper
            key={contact.id}
            className="cursor-pointer"
            onClick={() => window.open(contact.link)}
          >
            <Icon size={30} />
          </HoverControlWrapper>
        );
      })}
    </div>
  );
};

export default IconList;
