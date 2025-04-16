'use client'

import { useDroppable } from '@dnd-kit/core'

export default function ArchiveBox() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'archive',
  })

  return (
    <div
    ref={setNodeRef}
    className={`text-[#9D9D95] py-[48px] rounded-lg border-[#9D9D95] outline-[1px] outline-offset-4 outline-dotted-[150px] outline-dotted text-center ${
        isOver ? 'bg-red-100 border-red-400' : 'border-gray-300'
      }`}
  >
     Drop league here to archive
  </div>
  )
}
