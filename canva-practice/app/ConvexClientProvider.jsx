"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import Provider from "./provider";
import Loading from "./loading";
import { Suspense } from "react";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function ConvexClientProvider({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ConvexProvider client={convex}>
        <Provider>{children}</Provider>
      </ConvexProvider>
    </Suspense>
  );
}
