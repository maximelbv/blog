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
    <div>
      <div>{question.question}</div>
      <div>
        {question.answers &&
          question.answers.map((answer, index) => {
            const rightIndex = Number(question.rightAnswerIndex);
            const isSelected = selectedAnswerIndex === index;
            const className =
              isSelected && isAnswered
                ? isCorrect
                  ? "border-2 border-green-500"
                  : "border-2 border-red-500"
                : "";

            return (
              <Button
                className={className}
                disabled={isAnswered}
                onClick={() => handleValidate(index, rightIndex)}
                key={answer}
              >
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
    <Carousel>
      <CarouselContent>
        {questions.map((question) => (
          <CarouselItem key={question.question}>
            <Question question={question} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Quizz;
