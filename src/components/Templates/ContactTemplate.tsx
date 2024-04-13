"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { VALIDATION_ERROR_MESSAGES } from "@/constants/message";
import { VALIDATION_REGEX } from "@/constants/validation";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LINK } from "@/constants/link";
import axios from "axios";

import Button from "../Atoms/Button";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import Input from "../Atoms/Input";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import Title from "../Atoms/Title";
import NextStep from "../Organisms/NextStep";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const ContactTemplate = () => {
  useScrollToTop();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      axios.post("https://formspree.io/f/mwkdqprq", data);
      alert("성공적으로 제출 하였습니다.");
      reset();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <Title>Contact.</Title>

      <Spacing className="h-4" />

      <form
        className="flex flex-col gap-5 font-sans max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <HoverControlWrapper>
          <Input>
            <Input.TextField
              id="name"
              placeholder="Name"
              {...register("name", {
                required: VALIDATION_ERROR_MESSAGES.NAME,
              })}
              errors={errors}
            />
          </Input>
        </HoverControlWrapper>

        <HoverControlWrapper>
          <Input>
            <Input.TextField
              id="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: VALIDATION_REGEX.EMAIL,
                  message: VALIDATION_ERROR_MESSAGES.EMAIL,
                },
              })}
              errors={errors}
            />
          </Input>
        </HoverControlWrapper>

        <HoverControlWrapper>
          <Input>
            <Input.TextArea
              id="message"
              placeholder="Message"
              {...register("message", {
                required: VALIDATION_ERROR_MESSAGES.MESSAGE,
              })}
              errors={errors}
            />
          </Input>
        </HoverControlWrapper>

        <Button>
          <HoverControlWrapper>Send Message</HoverControlWrapper>
        </Button>
      </form>

      <NextStep page={LINK.ABOUT} text="다시한번 보실래요?" />
    </PageLayout>
  );
};

export default ContactTemplate;
