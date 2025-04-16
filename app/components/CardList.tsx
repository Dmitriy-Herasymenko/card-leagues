"use client";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { initialCards } from "../data/cards";
import { ChevronIcon } from "./icons";
import Image from "next/image";
import { SortableCard } from "./SortableCard";
import { Archive } from "./Archive";
import { Logo } from "../../public";

export default function CardList() {
  const [cards, setCards] = useState(initialCards);
  const [archived, setArchived] = useState<string[]>([]);
  const [showArchive, setShowArchive] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === "archive") {
      setCards((prev) => prev.filter((c) => c.id !== active.id));
      setArchived((prev) => [...prev, active.id as string]);
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = cards.findIndex((c) => c.id === active.id);
      const newIndex = cards.findIndex((c) => c.id === over.id);
      setCards(arrayMove(cards, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="max-w-md mx-auto  min-w-[640px] mt-12">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[12px]">
            <Image src={Logo} alt="Dots" width={16} height={16} />

            <h1 className=" text-[24px] text-[#fffff6] font-bold ">Leagues</h1>
          </div>
          <div className="bg-[#262626] text-[#FFFFFF] flex items-center gap-2 p-[13px] rounded-[4px] cursor-pointer">
            <span className="text-[24px]">+</span>
            <span>Connect League</span>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <SortableContext
            items={cards.map((c) => c.id)}
            strategy={verticalListSortingStrategy}
          >
            {cards.map((card) => (
              <SortableCard
                key={card.id}
                id={card.id}
                text={card.text}
                author={card.author}
                year={card.year}
                status={card.status}
                titleIcon={card.titleIcon}
                brandLogo={card.brandLogo}
              />
            ))}
          </SortableContext>
        </div>

        <div className=" mt-[41px] ">
          <div
            onClick={() => setShowArchive(!showArchive)}
            className="cursor-pointer mx-auto transition-transform flex items-center gap-[8px]"
          >
            <ChevronIcon isOpen={showArchive} />
            <span className="text-[14px] font-normal text-[#9D9D95]">
              Archived
            </span>
          </div>

          {showArchive && <Archive archived={archived} />}
        </div>
      </div>
    </DndContext>
  );
}
