import { ChevronDown, MessageCircle, Video } from "lucide-react";

import { Header } from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Module from "../components/Module";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <VideoPlayer />

          <aside className="absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 w-80 border-l border-zinc-800 bg-zinc-900 h-[440px]  overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              title="Desvendando o Redux"
              moduleIndex={0}
              amountOfLessons={3}
            />
            <Module
              title="Desvendando o Redux"
              moduleIndex={1}
              amountOfLessons={3}
            />
            <Module
              title="Desvendando o Redux"
              moduleIndex={2}
              amountOfLessons={3}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
