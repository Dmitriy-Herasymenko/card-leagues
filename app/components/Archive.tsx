import { SortableCard } from "./SortableCard"
import ArchiveBox from "./ArchiveBox";
import { initialCards } from "../data/cards"

export function Archive({ archived }: { archived: string[] }) {
    return (
      <div className="mt-10 ">
        <ul className="space-y-2">
          <ArchiveBox />
          {archived.length === 0 ? (
            <li>No cards found</li>
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
    );
  }
  