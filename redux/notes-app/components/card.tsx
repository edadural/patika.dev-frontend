"use client";
import { Input, Textarea } from "@heroui/input";

type CardProps = {
  title: string;
  description: string;
  color?: string;
  isDisabled?: boolean;
  onTitleChange?: (v: string) => void;
  onDescriptionChange?: (v: string) => void;
};

const colorClass: Record<string, string> = {
  secondary: "bg-purple-300",
  warning: "bg-yellow-300",
  success: "bg-green-300",
  danger: "bg-red-300",
  primary: "bg-blue-300",
  info: "bg-cyan-300",
};

export default function Card({
  title,
  description,
  color,
  isDisabled = false,
  onTitleChange,
  onDescriptionChange,
}: CardProps) {
  return (
    <div
      className={`w-full p-4 rounded-2xl shadow-md  ${
        color ? (colorClass[color] ?? "bg-default-300") : "bg-default-300"
      }`}
    >
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Enter title"
          value={title}
          onChange={(e) => onTitleChange?.(e.target.value)}
          isDisabled={isDisabled}
        />
        <Textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => onDescriptionChange?.(e.target.value)}
          isDisabled={isDisabled}
          minRows={3}
        />
      </div>
    </div>
  );
}
