"use client";
import Card from "@/components/card";
import { Button } from "@heroui/button";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const colors = [
    "secondary",
    "warning",
    "success",
    "danger",
    "primary",
    "info",
  ];
  const notes = useSelector((state: any) => state.notes.items);
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card
        title={title}
        description={description}
        color={selectedColor}
        isDisabled={false}
      />

      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer bg-${color} border-2 border-gray-100 hover:scale-110 transition`}
              title={color}
            ></div>
          ))}
        </div>
        <Button color="primary">Add</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {notes.map((note: any) => (
          <Card
            key={note.id}
            title={note.title}
            description={note.description}
            color={note.color}
            isDisabled={true}
          />
        ))}
      </div>
    </section>
  );
}
