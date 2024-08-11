"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Icons } from "./icons";

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
      <div className="text-[18px] font-semibold mb-2 leading-[1.5]">
        {question.question}
      </div>
      <div className="grid gap-4 col md:grid-cols-2 grid-cols-1">
        {question.answers &&
          question.answers.map((answer, index) => {
            const rightIndex = Number(question.rightAnswerIndex);
            const isSelected = selectedAnswerIndex === index;
            const className =
              isSelected && isAnswered
                ? isCorrect
                  ? "gap-3 justify-start bg-green-500 min-h-[45px] rounded-full text-[16px] p-2 !text-secondary-foreground hover:bg-green-500"
                  : "gap-3 justify-start bg-red-500 min-h-[45px] rounded-full text-[16px] p-2 !text-secondary-foreground hover:bg-red-500"
                : "gap-3 justify-start w-full min-h-[45px] rounded-full bg-highlighted text-pretty text-[16px] p-2 hover:bg-highlighted";

            const iconClassName =
              isSelected && isAnswered
                ? isCorrect
                  ? "w-7 h-7 text-[14px] flex items-center justify-center border-[1px] border-secondary-foreground rounded-full !bg-secondary-foreground "
                  : "w-7 h-7 text-[14px] flex items-center justify-center border-[1px] border-secondary-foreground rounded-full !bg-secondary-foreground"
                : "w-7 h-7 text-[14px] flex items-center justify-center border-[1px] border-secondary-foreground rounded-full";

            return (
              <Button
                variant="secondary"
                className={className}
                // disabled={isAnswered}
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
                {answer}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

const Quizz = ({ questions }: QuizzProps) => {
  return (
    <Carousel className="p-8 rounded-lg bg-secondary min-h-[200px]">
      <CarouselContent>
        {questions.map((question) => (
          <CarouselItem key={question.question}>
            <Question question={question} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 justify-end mt-12 mb-[-20px]">
        <CarouselPrevious variant={"secondary"} />
        <CarouselNext variant={"secondary"} />
      </div>
    </Carousel>
  );
};

export default Quizz;
