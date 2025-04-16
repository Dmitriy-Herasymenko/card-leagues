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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import ArchiveBox from "./ArchiveBox";
import { ChevronIcon } from "./icons";
import Image from "next/image";
import {
  Dots,
  TitleIcon1,
  TitleIcon2,
  TitleIcon3,
  BrandLogo1,
  Calendar,
  BgCard,
  Logo,
} from "../../public";

const initialCards = [
  {
    id: "1",
    titleIcon: TitleIcon1,
    brandLogo: BrandLogo1,
    text: "St. Louis Pro Season Points League",
    author: "ESPN",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "2",
    titleIcon: TitleIcon2,
    brandLogo: BrandLogo1,
    text: "Washington Pro Season Points League",
    author: "ESPN",
    year: "2023",
    status: "Pre-Draft",
  },
  {
    id: "3",
    titleIcon: TitleIcon3,
    brandLogo: BrandLogo1,
    text: "New York Pro H2H Points PPR League",
    author: "ESPN",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "4",
    titleIcon: TitleIcon2,
    brandLogo: BrandLogo1,
    text: "Washington Pro Season Points League",
    author: "ESPN",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "5",
    titleIcon: TitleIcon3,
    brandLogo: BrandLogo1,
    text: "New York Pro H2H Points PPR League",
    author: "ESPN",
    year: "2023",
    status: "Post-Draft",
  },
];

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

          {showArchive && (
            <div className="mt-10 ">
              <ul className="space-y-2">
                <ArchiveBox />
                {archived.length === 0 ? (
                  <li>Немає карток в архіві</li>
                ) : (
                  archived.map((id) => {
                    const card = initialCards.find((c) => c.id === id);
                    return (
                      <li key={id} className="mt-4">
                        <SortableCard
                          key={card?.id}
                          id={card?.id || ""}
                          text={card?.text || ""}
                          author={card?.author || ""}
                          year={card?.year || ""}
                          status={card?.status || ""}
                          titleIcon={card?.titleIcon || ""}
                          brandLogo={card?.brandLogo || ""}
                        />
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </DndContext>
  );
}

function SortableCard({
  id,
  text,
  author,
  year,
  status,
  titleIcon,
  brandLogo,
}: {
  id: string;
  text: string;
  author: string;
  year: string;
  status: string;
  titleIcon: string;
  brandLogo: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex  bg-[url('/BgCard.svg')] bg-no-repeat bg-right items-center justify-between max-h-[114px] pl-[32px] py-[34px]  rounded-[6px] shadow bg-[#030303] border cursor-grab hover:bg-[#050505] ${
        isDragging &&
        " transform origin-center rotate-[-6deg] translate-x-2 translate-y-1"
      }`}
    >
      <div>
        <div className="flex gap-[24px]">
          <Image src={titleIcon} alt="Dots" width={40} height={40} />

          <div>
            <div>
              <span className="text-[#E5E5DD] font-normal text-base font-normal ">
                {text}
              </span>
              <span className={`${getStatusStyles(status)}`}>{status}</span>
            </div>
            <div className="flex gap-[16px] mt-[16px]">
              <div className="flex gap-[6px]">
                <Image src={brandLogo} alt="Dots" width={12} height={12} />
                <span className="text-[#9D9D95] font-normal text-xs">
                  {author}
                </span>
              </div>

              <div className="flex gap-[6px]">
                <Image src={Calendar} alt="Dots" width={12} height={12} />
                <span className="text-[#9D9D95] font-normal text-xs">
                  {year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDragging && (
        <div className=" flex items-center justify-center w-[24px] h-screen max-h-[110px] bg-[rgba(255,255,255,0.3)]  rounded-r-[5px] rounded-l-[2px] mx-[2px]">
          <Image src={Dots} alt="Dots" width={6} height={11} />
        </div>
      )}
    </div>
  );
}

function getStatusStyles(status: string) {
  switch (status) {
    case "Draft Live":
      return "ml-[8px] text-[#B5FF4D] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(181,255,77,0.1)] shadow-[0px_0px_0px_0.5px_rgba(181,255,77,0.2)] border-[1px] border-[rgba(181,255,77,0.5)]";
    case "Pre-Draft":
      return "ml-[8px] text-[#FFAD33] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(255,173,51,0.1)] shadow-[0px_0px_0px_0.5px_rgba(255,173,51,0.2)] border-[1px] border-[rgba(255,173,51,0.5)]";
    case "Post-Draft":
      return "ml-[8px] text-[#CCCCC5] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(0,0,0,0.9)] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.9)] border-[1px] border-[rgba(204,204,197,0.5)]";
    default:
      return "text-[#B5FF4D] bg-[#D0FF7D] border-[#A5FF4D]";
  }
}
