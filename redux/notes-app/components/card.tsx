import { Input, Textarea } from "@heroui/input";
import React from "react";

function card({ title, description, color, isDisabled }: any) {
  return (
    <div
      className={`flex flex-col gap-3 border border-gray-200 p-4 rounded-lg bg-${color}`}
    >
      <Input
        placeholder="Enter title"
        color={color}
        value={title}
        isDisabled={isDisabled}
      />
      <Textarea
        placeholder="Enter description"
        color={color}
        value={description}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default card;
