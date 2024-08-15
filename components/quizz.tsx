"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { RotateCcw } from "lucide-react";

interface Question {
  question: string;
  rightAnswerIndex: number;
  answers: string[];
}

interface QuizzProps {
  questions: Question[];
}

const Question = ({ question }: { question: Question }) => {
  const [isAnswered, setisAnswered] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleValidate = (answerIndex: number, rightIndex: number): void => {
    setisAnswered(true);
    setSelectedAnswerIndex(answerIndex);
    if (answerIndex === rightIndex) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="grid gap-2">
      <div className="text-[16.5px] font-semibold mb-2 leading-[1.5]">
        {question.question}
      </div>
      <div className="grid gap-4 col md:grid-cols-1 grid-cols-1">
        {question.answers &&
          question.answers.map((answer, index) => {
            const rightIndex = Number(question.rightAnswerIndex);
            const isSelected = selectedAnswerIndex === index;
            const buttonClassName =
              isSelected && isAnswered
                ? isCorrect
                  ? "gap-3 grid grid-cols-[auto_1fr] bg-green-500 min-h-[45px] !h-fit rounded-full text-[16px] p-2 !text-secondary-foreground hover:bg-green-500 !text-white disabled:!opacity-100 disabled:!cursor-auto text-start disabled:!h-fit disabled:w-full disabled:text-wrap"
                  : "gap-3 grid grid-cols-[auto_1fr] bg-red-500 min-h-[45px] !h-fit rounded-full text-[16px] p-2 !text-secondary-foreground hover:bg-red-500 !text-white disabled:!opacity-100 disabled:!cursor-auto text-start disabled:!h-fit disabled:w-full disabled:text-wrap"
                : "gap-3 grid grid-cols-[auto_1fr] w-full min-h-[45px] !h-fit rounded-full bg-highlighted text-pretty text-[16px] p-2 hover:bg-highlighted text-start disabled:h-fit disabled:w-fit disabled:w-full disabled:text-wrap";

            const iconClassName =
              isSelected && isAnswered
                ? isCorrect
                  ? "!w-7 !h-7 text-[14px] flex items-center justify-center border-[1px] border-white rounded-full !bg-white"
                  : "!w-7 !h-7 text-[14px] flex items-center justify-center border-[1px] border-white rounded-full !bg-white"
                : "!w-7 !h-7 text-[14px] flex items-center justify-center border-[1px] border-secondary-foreground rounded-full";

            return (
              <Button
                variant="secondary"
                className={buttonClassName}
                disabled={isAnswered}
                onClick={() => handleValidate(index, rightIndex)}
                key={answer}
              >
                <div className={iconClassName}>
                  <span>
                    {isSelected && isAnswered ? (
                      isCorrect ? (
                        <Icons.check />
                      ) : (
                        <Icons.cancel />
                      )
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </span>
                </div>
                <p
                  className={`!text-foreground ${isSelected && "!text-[#fff]"}`}
                >
                  {answer}
                </p>
              </Button>
            );
          })}
      </div>
    </div>
  );
};

const Quizz = ({ questions }: QuizzProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [resetKey, setResetKey] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleReset = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <Carousel
      setApi={setApi}
      key={resetKey}
      draggable={false}
      className="p-4 md:p-8 rounded-lg bg-secondary min-h-[200px]"
    >
      <div className="flex justify-between mb-2 md:mt-[-14px]">
        <span className="font-dahliaBold text-[22px] md:text-[24px] mr-2">
          Test your knowledge
        </span>
        <span className="font-dahliaBold text-[22px] md:text-[24px]">
          {current && current}{" "}
          <span className="text-muted-foreground">/ {count && count}</span>
        </span>
      </div>
      <hr className="my-5" />
      <CarouselContent>
        {questions.map((question, index) => {
          return (
            <CarouselItem key={`${resetKey}-${index}`}>
              <Question question={question} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex justify-between items-end">
        <Button
          variant={"ghost"}
          className="flex gap-1 p-0"
          onClick={handleReset}
        >
          <RotateCcw className="scale-75" />
          Reset
        </Button>
        <div className="flex gap-2 justify-end mt-12 mb-[-20px]">
          <CarouselPrevious variant={"secondary"} />
          <CarouselNext variant={"secondary"} />
        </div>
      </div>
    </Carousel>
  );
};

export default Quizz;
