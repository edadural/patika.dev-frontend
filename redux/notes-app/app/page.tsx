"use client";
import Card from "@/components/card";
import { Button } from "@heroui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "@/redux/notes/notesSlice";

const colorClass: Record<string, string> = {
  secondary: "bg-purple-300",
  warning: "bg-yellow-300",
  success: "bg-green-300",
  danger: "bg-red-300",
  primary: "bg-blue-300",
  info: "bg-cyan-300",
};

export default function Home() {
  const colors = [
    "secondary",
    "warning",
    "success",
    "danger",
    "primary",
    "info",
  ];
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.notes.items);
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const noteAdd = () => {
    if (!title.trim() || !description.trim())
      return alert("Please fill all fields");
    dispatch(
      addNote({
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        color: selectedColor,
      })
    );
    setTitle("");
    setDescription("");
    setSelectedColor("");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <Card
        title={title}
        description={description}
        color={selectedColor}
        isDisabled={false}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
      />

      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 border-gray-100 hover:scale-110 transition ${colorClass[color]}`}
              title={color}
            />
          ))}
        </div>
        <Button color="primary" onPress={noteAdd}>
          Add
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
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
