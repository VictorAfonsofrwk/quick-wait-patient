import { ReactChild } from "react";

export default function MainContentNews({ children }: { children: ReactChild }) {
    return <div className="relative w-3/4 rounded-lg m-1 bg-sky-50">{children}</div>;
}
